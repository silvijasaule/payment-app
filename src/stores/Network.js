import { writable } from "svelte/store";
import { ethers } from "ethers";
export let userConnected = writable(false);
export let userAddress = writable("");
export let networkProvider = writable("");
export let networkSigner = writable("");
export let chainID = writable("");

export const connectWallet = async () => {
  await window.ethereum.enable();
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();
  networkProvider.set(provider);
  networkSigner.set(signer);
  userAddress.set(await signer.getAddress());
  chainID.set(await ethereum.request({ method: "eth_chainId" }));
  userConnected.set(true);
  console.log("wallet connected");
};
