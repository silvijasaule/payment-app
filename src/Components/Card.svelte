<script>
	import Button from './components/Button.svelte';
</script>

<div class="card">
	<slot name="title"></slot>
	<Button $title />
</div>

<style lang="scss">

    @import '../styles/colors.scss';

    .card{
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>