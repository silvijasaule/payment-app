<script>
	import HelloCard from "./Components/organisms/HelloCard.svelte";
	import ClaimCard from "./Components/organisms/ClaimCard.svelte";
	import AddBalanceCard from "./Components/organisms/AddBalanceCard.svelte";
	import NotAuthorizedCard from "./Components/organisms/NotAuthorizedCard.svelte";
	import { userAddress, userConnected } from './stores/Network.js';

	// const beneficiary = "0x73774102b7a588b31ed43d79903ced2d48b543e3";
	// let userWalletAddress;

	// const getUserAddress = async () => {
	// 	userWalletAddress = userAddress;
	// 	return userWalletAddress;
	// }

</script>

<main>
	{#if !$userConnected}
		<HelloCard/>
	{:else if $userConnected && $userAddress == "0x73774102b7a588b31ed43d79903ced2d48b543e3"}
		<ClaimCard/>
	{:else if $userConnected && $userAddress == "0xC370b50eC6101781ed1f1690A00BF91cd27D77c4"}
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