import React, { useState } from 'react';

function App() {
  const [result, setResult] = useState('');

  const mintNFT = async () => {
    setResult('Minting NFT...');
    try {
      const response = await fetch('/api/mint', { method: 'POST' });
      const data = await response.json();
      setResult(`NFT Minted: ${data.nftAddress}`);
    } catch (error) {
      console.error('Error minting NFT:', error);
      setResult('Error minting NFT. Check the console for details.');
    }
  };

  return (
    <div>
      <h1>Solana NFT Minting</h1>
      <button onClick={mintNFT}>Mint NFT</button>
      <p>{result}</p>
    </div>
  );
}

export default App;
