import type { WalletInit } from '@web3-onboard/common'

function argent(): WalletInit {
  return () => ({
    label: 'Login with Argent',
    getIcon: async () =>
      'https://images.prismic.io/argentwebsite/313db37e-055d-42ee-9476-a92bda64e61d_logo.svg?auto=format%2Ccompress&fit=max&q=50',
    getInterface: async ({ chains }) => {
      const [chain] = chains

      const { getEthereumProvider } = await import('@argent/login')
      const { createEIP1193Provider } = await import('@web3-onboard/common')

      const ethereumProvider = getEthereumProvider({ 
        chainId: parseInt(chain.id),
        rpcUrl: chain.rpcUrl,
      })
      await ethereumProvider.enable()

      const provider = createEIP1193Provider(ethereumProvider, {
        eth_chainId: async ({ baseRequest }) => {
          const chainId = await baseRequest({ method: 'eth_chainId' })
          return `0x${parseInt(chainId).toString(16)}`
        }
      })

      return { provider }
    }
  })
}

export default argent
