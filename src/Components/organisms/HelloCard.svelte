<script>
    import Card from '../atoms/Card.svelte';
	import Button from '../atoms/Button.svelte';
    import {push, pop, replace} from 'svelte-spa-router';

</script>

<Card>
	<h1 class="card__title"> 🌞Good morning, degen.</h1>
    <h3 class="card__subtitle">Please connect your wallet to claim your earnings.</h3>
	<Button title={"Connect wallet"} onClick={() => push('/claim/')} />
</Card>

<style lang="scss">

    @import '../../styles/colors.scss';

    .card{

        &__title {
            color: $text-color;
            font-size: 36px;
            margin:0 0 32px;
        }

        &__subtitle {
            color:rgba($text-color, 0.8);
            font-size: 18px;
            margin: 0 0 48px;
            font-weight: 500;
        }
    }
</style>