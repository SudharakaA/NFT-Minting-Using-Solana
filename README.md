# Solana NFT Minting Portal

This project is a React-based web application that allows users to mint NFTs on the Solana blockchain. It features a modern, interactive UI and integrates with a backend server to handle the minting process.

## Features

- **Mint NFTs**: Users can mint unique NFTs on the Solana blockchain.
- **Interactive UI**: Includes animations, progress bars, and real-time feedback.
- **Wallet Integration**: Connect your wallet to interact with the blockchain.
- **Responsive Design**: Fully responsive and optimized for all devices.
- **Physics Simulation**: Interactive physics-based animations for a fun user experience.

## Technologies Used

- **Frontend**: React, CSS, and JavaScript.
- **Backend**: Node.js with Express.
- **Blockchain**: Solana blockchain using `@solana/web3.js` and `@metaplex-foundation/js`.

## Setup Instructions

### Prerequisites

- Node.js and npm installed on your system.
- Solana CLI installed and configured.
- A Solana wallet with Devnet SOL for testing.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-repo/solana-nft-minting-portal.git
   cd solana-nft-minting-portal
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up the Solana environment:
   ```bash
   solana config set --url https://api.devnet.solana.com
   ```

### Running the Application

1. Start the backend server:
   ```bash
   node src/backend/server.js
   ```

2. Start the React development server:
   ```bash
   npm start
   ```

3. Open the application in your browser at:
   ```
   http://localhost:3000
   ```

### Building for Production

To build the application for production:
```bash
npm run build
```

The production-ready files will be available in the `build` directory.

### Deploying the Application

You can deploy the application using services like Vercel, Netlify, or AWS. Ensure the backend server is also deployed and accessible.

## Project Structure

```
/src
  /backend
    server.js          # Backend server
    mintNFT.js         # NFT minting logic
  /frontend
    App.js             # Main React component
    /components
      Header.js        # Header component
      Footer.js        # Footer component
      MintNFT.js       # NFT minting component
    index.js           # React entry point
index.html             # HTML entry point
README.md              # Project documentation
```

## Usage

1. **Connect Wallet**: Click the "Connect Wallet" button to link your Solana wallet.
2. **Mint NFT**: Use the minting controls to select the quantity and click "Mint Now."
3. **View Progress**: Check the progress bar and minted count for real-time updates.

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.

## Acknowledgments

- [Solana](https://solana.com) for the blockchain infrastructure.
- [Metaplex](https://metaplex.com) for the NFT tools and libraries.
- [Unsplash](https://unsplash.com) for placeholder images.

## Contact

For questions or feedback, please contact [sudharakaashenaudi@gmail.com].
