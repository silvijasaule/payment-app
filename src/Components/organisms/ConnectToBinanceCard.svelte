<script>
    import Card from '../atoms/Card.svelte';
	import Button from '../atoms/Button.svelte';
    import { connectWallet } from '../../stores/Network.js';
</script>

<Card>
	<h1 class="card__title"> ❗ Wrong network</h1>
    <h3 class="card__subtitle">It seems that you are connected to wrong network. 
        Please connect to Binance Smart Chain.</h3>
	<Button title={"Connect wallet"} onClick={connectWallet} />
</Card>

<style lang="scss">

    @import '../../styles/colors.scss';

    .card{

        &__title {
            color: $text-color;
            font-size: 2.25em;
            margin:0 0 2em;
        }

        &__subtitle {
            color:rgba($text-color, 0.8);
            font-size: 1.125em;
            margin: 0 0 3em;
            font-weight: 500;
            white-space: pre-line;
            text-align: center;
        }
    }
</style>