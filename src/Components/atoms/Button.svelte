<script>
    export let title;
    export let onClick;
</script>

<button on:click={onClick}> 
    {title}
</button>

<style lang="scss">

    @import '../../styles/colors.scss';

    button {
        background-color: $button-color;
        color: $white;
        cursor: pointer;
        border-radius: 10px;
        padding: 11px 0;
        font-weight: 700;
        font-size: 18px;
        line-height: 24px;
        width: 100%;
    }

    button:hover {
	    background-color: darken($color: $button-color, $amount: 10%);
        transition: ease background-color 0.2; 

    }

    button:active {
        background-color: darken($color: $button-color, $amount: 20%);
        transition: ease background-color 0.2; 

    }

</style>