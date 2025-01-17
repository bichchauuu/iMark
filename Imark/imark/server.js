const express = require('express');
const connectDB = require('./Database/app');

const app = express();
const PORT = process.env.PORT || 3000;

// Connect to MongoDB
connectDB();

// Middleware to parse JSON
app.use(express.json());

// Serve static files from the assets directory
app.use(express.static('assets'));

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
