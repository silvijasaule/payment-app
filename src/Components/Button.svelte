<script>
    export let title;
</script>

<button> 
    {title}
</button>

<style>
    button {
        background-color: var(--button-color);
        color:var(--white);
        cursor: pointer;
        border-radius: 10px;
        padding: 11px 0;
        font-weight: 700;
        font-size: 18px;
        line-height: 24px;
        /* width: 100%; */
    }

    button:hover {
	    filter: brightness(1.2);
        transition: ease filter 0.2; 

    }

    button:active {
        filter: brightness(1.3);
        transition: ease filter 0.5; 

    }

</style>