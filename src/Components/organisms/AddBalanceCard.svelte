<script>
    import Card from '../atoms/Card.svelte';
	import Button from '../atoms/Button.svelte';
    import { ethers } from 'ethers';
    import { userConnected, networkSigner, networkProvider, connectWallet } from '../../stores/Network.js';
    import { paymentAppAbi } from '../../stores/ABI.js';

    export let tokenName = 'bUSD';
    // export const beneficiary = "0x73774102B7A588B31ED43d79903Ced2d48B543e3";

    // const paymentContractAddress = "0xd499423f80ec1BEd48BCb865A8a3B871Cef684eA";
    // const paymentAppContract = new ethers.Contract(paymentContractAddress, paymentAppAbi, $networkProvider);
    // const paymentAppContractWithSigner = paymentAppContract.connect($networkSigner);

    // const claimAll  = async () => {
    //     await paymentAppContractWithSigner.claimTokens();
    //     console.log("balance claimed");
    // }
</script>

<Card>
	<h1 class="card__title"> 💰 Add a new balance </h1>
    <h3 class="card__subtitle">Deposit a monthly payment and bonus tokens</h3>
    <div class="earnings">
        <div class="earnings__container earnings__container--first">
            <h4 class="earnings__title">Monthly:</h4>
            <label for="inp" class="inp">
                <input type="text" id="inp" placeholder="&nbsp;">
                <span class="focus-bg"></span>
            </label>
            <span class="earnings__amount"> {tokenName}</span>
        </div>
        <div class="earnings__container">
            <h4 class="earnings__title">Bonus:</h4>
            <label for="inp" class="inp">
                <input type="text" id="inp" placeholder="&nbsp;">
                <span class="focus-bg"></span>
            </label>
            <span class="earnings__amount"> xToken</span>
        </div>
    </div>
	<Button title={"Add balance"} onClick />
</Card>

<style lang="scss">

    @import '../../styles/colors.scss';
    @import '../../styles/input.scss';

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