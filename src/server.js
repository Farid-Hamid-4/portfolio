const express = require('express');
const cors = require('cors'); // Import the CORS middleware

const app = express();

app.use(cors());

app.get('/get-access-token', (req, res) => {
    const clientId = process.env.REACT_APP_CLIENT_ID;
    const clientSecret = process.env.REACT_APP_CLIENT_SECRET;

    fetch('https://accounts.spotify.com/api/token', {
        method: 'POST',
        headers: {
            Authorization: `Basic ` + btoa(clientId + ":" + clientSecret),
            "Content-Type": "application/x-www-form-urlencoded",
        },
        body: 'grant_type=client_credentials',
        json: true,
    })
    .then(response => response.json())
    .then(data => {
        console.log('Access token data:', data);
        res.json({ access_token: data.access_token });
    })
    .catch(error => {
        console.error('Error trying to fetch access token:', error);
        res.status(500).json({ error: 'Failed to fetch access token' });
    });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
