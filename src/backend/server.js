const express = require('express');
const path = require('path');
const mintNFT = require('./mintNFT');

const app = express();
const PORT = 5000;

app.post('/api/mint', async (req, res) => {
  try {
    const nftAddress = await mintNFT();
    res.json({ nftAddress });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.use(express.static(path.join(__dirname, '../../build'))); // Serve React build files

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../../build/index.html')); // Serve React app
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
