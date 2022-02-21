<script>
	import Router from 'svelte-spa-router';
	import HelloCard from "./Components/organisms/HelloCard.svelte";
	import ClaimCard from "./Components/organisms/ClaimCard.svelte";

	const routes = {
	'/': HelloCard,
	'/claim/': ClaimCard
	}

</script>

<main>
	<Router {routes}/>
</main>

<style>
	main {
		width: auto;
		height: 100vh;
		display:flex;
		align-items: center;
		justify-content: center;
		margin: 0 auto;
	}
</style>