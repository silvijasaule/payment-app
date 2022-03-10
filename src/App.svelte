<script>
	import HelloCard from "./Components/organisms/HelloCard.svelte";
	import ClaimCard from "./Components/organisms/ClaimCard.svelte";
	import AddBalanceCard from "./Components/organisms/AddBalanceCard.svelte";
	import NotAuthorizedCard from "./Components/organisms/NotAuthorizedCard.svelte";
	import ConnectToBinanceCard from "./Components/organisms/ConnectToBinanceCard.svelte";
	import { userAddress, userConnected, chainID } from './stores/Network.js';

	const beneficiary = "0x73774102B7A588B31ED43d79903Ced2d48B543e3";
	const owner = "0xC370b50eC6101781ed1f1690A00BF91cd27D77c4";
</script>

<main>
	{#if !$userConnected}
		<HelloCard/>
	{:else if $userConnected && $chainID != "0x38"}
		<ConnectToBinanceCard/>
	{:else if $userConnected && $userAddress == beneficiary}
		<ClaimCard/>
	{:else if $userConnected && $userAddress == owner}
		<AddBalanceCard/>
	{:else}
		<NotAuthorizedCard/>	
	{/if}

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