import { connectorsForWallets } from "@rainbow-me/rainbowkit";
import { injectedWallet, rainbowWallet, walletConnectWallet, metaMaskWallet } from "@rainbow-me/rainbowkit/wallets";
import { configureChains, createConfig } from "wagmi";
import { mainnet, goerli, bscTestnet } from "wagmi/chains";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";
import { env } from "./env";
import "wagmi/window";

const projectId = env.projectId;

export const { chains, publicClient, webSocketPublicClient } = configureChains(
  [mainnet, goerli, bscTestnet],
  [alchemyProvider({ apiKey: process.env.NEXT_PUBLIC_ALCHEMY_ID }), publicProvider()]
);

const connectors = connectorsForWallets([
  {
    groupName: "Popular",
    wallets: [
      injectedWallet({ chains }),
      metaMaskWallet({ projectId, chains }),
      rainbowWallet({ projectId, chains }),
      walletConnectWallet({ projectId, chains }),
    ],
  },
]);

export const wagmiClient = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
});
