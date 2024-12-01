import { useState} from 'react'

const useConnectWallet = () => {
  
  const [isConnected, setIsConnected] = useState(false);
  const [account, setAccount] = useState('');
  
  //Connect Wallet
  async function connectWallet() {
    try {
      if (isConnected) return;
      await window.ethereum.request({
        method: 'wallet_switchEthereumChain',
        params: [{ chainId: '0xaa36a7' }],
      })
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
        params: [
          {
            chainId: "0xaa36a7",
            chainName: "Sepolia",
            rpcUrls: ["https://sepolia.drpc.org"],
            blockExplorerUrls: ["https://sepolia.etherscan.io/"],
            nativeCurrency: {
              name: "Ethereum",
              symbol: "ETH",
              decimals: 18,
            },
          },
        ],
      });
      setIsConnected(true);
      const account = await accounts[0];
      setAccount(account);
    } catch (switchError) {
      alert(switchError)
      if (switchError.code === 4902) {
        alert("Please connect to the Sepolia Network");
    }
  }
}

const disconnectWallet = () => {
  if (!isConnected) return;
  setIsConnected(false)
  setAccount('')
}

return { connectWallet, account, isConnected, disconnectWallet }
};
export default useConnectWallet