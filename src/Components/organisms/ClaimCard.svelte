<script>
    import Card from '../atoms/Card.svelte';
	import Button from '../atoms/Button.svelte';

    export let monthlyEarnings = 1301.54;
    export let tokenName = 'bUSD';
    export let monthlyBonusAmount = '100';
</script>

<Card>
	<h1 class="card__title"> 💵 Claim your earnings</h1>
    <h3 class="card__subtitle">Check your claimable amount and withdraw.</h3>
    <div class="earnings">
        <div class="earnings__container earnings__container--first">
            <h4 class="earnings__title">Monthly:</h4>
            <span class="earnings__amount">{monthlyEarnings} {tokenName}</span>
        </div>
        <div class="earnings__container">
            <h4 class="earnings__title">Bonus:</h4>
            <span class="earnings__amount">{monthlyBonusAmount} xToken</span>
        </div>

    </div>
	<Button title={"Claim All"} onClick />
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