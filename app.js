const express = require('express');
const app = express();

app.get('/api', (req, res) => {
    res.send('Welcome to Fahad\'s World!');
})

app.get('/api/fahad', (req, res) => {
    res.send('Welcome to \'fahad\'s page!');
})

app.get('/api/ramzan', (req, res) => {
    res.send('Welcome to \'ramzan\'s page!');
})

app.get('/api/eid', (req, res) => {
    res.send('Welcome to \'Eid\'s page!');
})

app.get('/api/eid-ul-azha', (req, res) => {
    res.send('Welcome to Baqra Eid, where is your Goat, man?');
})

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log('Server is running on port 3000');
})