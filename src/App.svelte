<script>
	// import HelloCard from "./Components/organisms/HelloCard.svelte";
	// import ClaimCard from "./Components/organisms/ClaimCard.svelte";
	import AddBalanceCard from "./Components/organisms/AddBalanceCard.svelte";

	// import { userConnected } from './stores/Network.js';

</script>

<main>
	<AddBalanceCard/>

	<!-- {#if !$userConnected}
		<HelloCard/>
	{:else}
		<ClaimCard/>	
	{/if} -->
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