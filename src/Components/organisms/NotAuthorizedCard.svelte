<script>
    import Card from '../atoms/Card.svelte';
</script>

<Card>
	<h1 class="card__title"> 🚫 You are not authorized</h1>
    <h3 class="card__subtitle">It seems like you don't have permission to access this page.</h3>
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