const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

app.get('/get-access-token', (req, res) => {
    res.json({clientId: process.env.REACT_APP_CLIENT_ID});
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
