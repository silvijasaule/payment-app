<script>
    import Card from '../atoms/Card.svelte';
	import Button from '../atoms/Button.svelte';
    import { ethers } from 'ethers';
    import { userConnected, networkSigner, networkProvider } from '../../stores/Network.js';
    import { paymentAppAbi } from '../../stores/ABI.js';
    import { ERC20Abi } from '../../stores/ERC20ABI.js';

    let paymentTokenSymbol;
    let bonusTokenSymbol;
    let monthlyEarnings;
    let monthlyBonusAmount;

    $: if($userConnected) {
        getBalance();
        getBonusBalance();
        getTokenSymbol();
        getBonusTokenSymbol();
    }

    const paymentContractAddress = "0xd499423f80ec1BEd48BCb865A8a3B871Cef684eA";
    const paymentAppContract = new ethers.Contract(paymentContractAddress, paymentAppAbi, $networkProvider);
    const paymentAppContractWithSigner = paymentAppContract.connect($networkSigner);

    const getTokenSymbol = async () => {
        const mainToken = await paymentAppContract.paymentToken.call();
        const erc20contract = new ethers.Contract(mainToken, ERC20Abi, $networkProvider);
        paymentTokenSymbol = await erc20contract.symbol();
        return paymentTokenSymbol;
    }

    const getBonusTokenSymbol = async () => {
        const bonusToken = await paymentAppContract.bonusToken.call();
        const erc20contract = new ethers.Contract(bonusToken, ERC20Abi, $networkProvider);
        bonusTokenSymbol = await erc20contract.symbol();
        return bonusTokenSymbol;
    }

    const getBalance  = async () => {
        const balance = await paymentAppContract.balanceOf();
        monthlyEarnings = parseFloat(ethers.utils.formatEther(balance)).toFixed(4);
    }

    const getBonusBalance  = async () => {
        const bonusBalance = await paymentAppContract.bonusBalanceOf();
        monthlyBonusAmount = parseFloat(ethers.utils.formatEther(bonusBalance)).toFixed(4);
    }

    const claimAll  = async () => {
        await paymentAppContractWithSigner.claimTokens();
        console.log("balance claimed");
    }
</script>

<Card>
	<h1 class="card__title"> 💵 Claim your earnings</h1>
    <h3 class="card__subtitle">Check your claimable amount and withdraw.</h3>
    <div class="earnings">
        <div class="earnings__container earnings__container--first">
            <h4 class="earnings__title">Monthly:</h4>
            <span class="earnings__amount">
                {monthlyEarnings ? monthlyEarnings : '0'} {paymentTokenSymbol ? paymentTokenSymbol : ""}
            </span>
        </div>
        <div class="earnings__container">
            <h4 class="earnings__title">Bonus:</h4>
            <span class="earnings__amount">{monthlyBonusAmount ? monthlyBonusAmount : '0'} x {bonusTokenSymbol ? bonusTokenSymbol : ""}</span>
        </div>
    </div>
	<Button title={"Claim All"} onClick={claimAll} />
    <p class="card__note"><span class="card__note--highlight">Note:</span> To get paid in a different token, please contact your employer.</p>
</Card>

<style lang="scss">

    @import '../../styles/colors.scss';

    .card{

        &__title {
            color: $text-color;
            font-size: 2.25em;
            margin:0 0 1em;
        }

        &__subtitle {
            color:rgba($text-color, 0.8);
            font-size: 1.125em;
            margin: 0 0 2em;
            font-weight: 500;
        }

        &__note {
            margin:1em 0 0;
            font-size: 0.875em;
            color: $light-text-color;

            &--highlight {
                color: $button-color;
            }
        
        }
    }

    .earnings {
        border-top: 1px solid rgba($color: $text-color, $alpha: 0.2);
        border-bottom: 1px solid rgba($color: $text-color, $alpha: 0.2);
        width:100%;
        margin-bottom: 2em;
        padding: 2em 0;

        &__container {
            display: flex;
            justify-content: space-between;
            align-items: center;

            &--first {
                margin-bottom: 0.75em;
            }
        }

        &__title {
            font-size: 1.5em;
            font-weight: 700;
            color: $text-color;
            line-height: 2em;
            margin:0;
        }

        &__amount {
            color: $light-text-color;
            font-size: 1.5em;
            line-height: 1.5em;
        }
    }
</style>