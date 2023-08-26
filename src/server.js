const express = require('express');
const cors = require('cors'); // Import the CORS middleware

const app = express();

// Use the CORS middleware
app.use(cors());

// ... other server configuration

// Your /get-access-token route
app.get('/get-access-token', (req, res) => {
  // Your code to fetch the access token
  // ...
  res.json({ access_token: 'your_access_token' }); // Replace with the actual token
});

// ... other routes

// Start the server
const PORT = process.env.PORT || 3001; // Use the provided port or default to 3001
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
