# @web3-onboard/argent

## Module for adding "Login with Argent" to web3-onboard

See [Argent Wallet Developer Docs](https://www.argent.xyz)

### Install

`yarn add @web3-onboard/argent`

## Usage

```typescript
import Onboard from '@web3-onboard/core'
import argentModule from '@web3-onboard/argent'

// initialize the module
const argent = argentModule({
  projectId: '00000000000000000000000000000000', // optional, in case your dapp has high traffic
  metadata: {
    name: 'Web3 Onboard Demo',
    description: 'Demo dapp of the  Web3 Onboard repo.',
  }
})


const onboard = Onboard({
  // ... other Onboard options
  wallets: [
    argent,
    //... other wallets
  ],
  chains: [
    {
      id: '0x118',  // = 280
      token: 'ETH',
      label: 'zkSync Goerli',
      rpcUrl: 'https://zksync2-testnet.zksync.dev'
    },
    // ... other chains
  ]
})

const connectedWallets = await onboard.connectWallet()
console.log(connectedWallets)
```
