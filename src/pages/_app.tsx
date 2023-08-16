import { RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { chains, wagmiClient } from "config/wagmi";
import type { AppProps } from "next/app";
import { useEffect, useState } from "react";
import "@rainbow-me/rainbowkit/styles.css";
import "../styles/globals.css";

import { WagmiConfig } from "wagmi";

function MyApp({ Component, pageProps }: AppProps) {
  // Render pages until all asynchronous operations are completed.

  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <WagmiConfig config={wagmiClient}>
      <RainbowKitProvider chains={chains}>
        <Component {...pageProps} />
      </RainbowKitProvider>
    </WagmiConfig>
  );
}

export default MyApp;
