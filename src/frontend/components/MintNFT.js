import React, { useState } from 'react';

function MintNFT() {
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);

  const mintNFT = async () => {
    setLoading(true);
    setResult('Minting NFT...');
    try {
      const response = await fetch('/api/mint', { method: 'POST' });
      const data = await response.json();
      setResult(`NFT Minted: ${data.nftAddress}`);
    } catch (error) {
      console.error('Error minting NFT:', error);
      setResult('Error minting NFT. Check the console for details.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <button
        onClick={mintNFT}
        style={{
          padding: '10px 20px',
          fontSize: '16px',
          backgroundColor: '#007bff',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
        }}
        disabled={loading}
      >
        {loading ? 'Processing...' : 'Mint NFT'}
      </button>
      {loading && (
        <div style={{ marginTop: '20px' }}>
          <div className="spinner" style={{
            width: '40px',
            height: '40px',
            border: '4px solid #f3f3f3',
            borderTop: '4px solid #007bff',
            borderRadius: '50%',
            animation: 'spin 1s linear infinite',
          }}></div>
        </div>
      )}
      <p style={{ marginTop: '20px', fontSize: '18px', color: '#333' }}>{result}</p>
    </div>
  );
}

export default MintNFT;
