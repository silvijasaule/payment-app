<script>
</script>

<div class="card">
    <slot></slot>
</div>

<style lang="scss">

    @import '../../styles/colors.scss';

    .card{
        align-items: center;
        background-color: rgba($color: $white, $alpha: 0.6);
        border-radius: 20px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 3.75em;
    }
</style>