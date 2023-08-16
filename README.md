# Dapp Template

## Introduction

This is a template for common decentralized application (dapp) built with [NextJs](https://nextjs.org/), [Wagmi](https://wagmi.sh/) and [RainbowKit](https://www.rainbowkit.com/). TypeScript is used as the main language.

## Features

In this template, I try to provide some primary functionalities in frontend:

- [x] Wallet connect
- [x] Signature
- [ ] Header (Navation)
- [ ] Footer

Here are some guidances for you modify or custom in your own dapp.

### 0. Get Start

Put `.env` file in your root directory. This is an example.

```
APP_ENV = development
NEXT_PUBLIC_CHAIN_ID = 1
NEXT_PUBLIC_ALCHEMY_ID = ''
NEXT_PUBLIC_PROJECT_ID = ''
```

### 1. Wallet

Define the wallet connectors in the file [wagmi.ts](/src/config/wagmi.ts). Separate the wallet connectors by group if you want. :warning: Remember to change the `NEXT_PUBLIC_PROJECT_ID` in `.env` file.

```ts
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
```

I set `coolMode` in the RainbowkitProvider. Refer it by this link: https://www.rainbowkit.com/docs/cool-mode. Cancel it in [app.tsx](/src/pages/_app.tsx).

### 2. Signature

Learn how to sign message? Refer to: https://wagmi.sh/examples/sign-message.
