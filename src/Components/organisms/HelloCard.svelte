<script>
    import Card from '../atoms/Card.svelte';
	import Button from '../atoms/Button.svelte';
    import { connectWallet } from '../../stores/Network.js';
</script>

<Card>
	<h1 class="card__title"> 🌞Good morning, degen.</h1>
    <h3 class="card__subtitle">Please connect your wallet to claim your earnings.</h3>
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
        }
    }
</style>