<script>
	import Button from './Button.svelte';
</script>

<div class="card">
	<h1 class="card__title"> 🌞Good morning, degen.</h1>
    <h3 class="card__subtitle">Please connect your wallet to claim your earnings.</h3>
	<Button title={"Connect wallet"} />
</div>

<style lang="scss">

    @import '../styles/colors.scss';

    .card{
        align-items: center;
        background-color: rgba($color: $white, $alpha: 0.6);
        border-radius: 20px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 60px;

        &__title {
            color: $text-color;
            font-size: 36px;
            margin:0 0 32px;
        }

        &__subtitle {
            color:$light-text-color;
            font-size: 18px;
            margin: 0 0 48px;
        }
    }
</style>