const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

app.get('/get-access-token', (req, res) => {
    res.json({ access_token: 'your_access_token' });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
