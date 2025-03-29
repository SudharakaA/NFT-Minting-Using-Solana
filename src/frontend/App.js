import React from 'react';
import Header from './components/Header';
import MintNFT from './components/MintNFT';
import Footer from './components/Footer';

function App() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header />
      <main style={{ flex: 1 }}>
        <MintNFT />
      </main>
      <Footer />
    </div>
  );
}

export default App;
