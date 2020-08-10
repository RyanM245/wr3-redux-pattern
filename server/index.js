const express = require('express');
const messages = require('../messages.json')
const app = express();

app.use(express.json())

const port = 4000;

app.get('/api/messages', (req, res) => {
    res.status(200).send(messages)
})

app.listen(port, () => console.log(`Server running on port ${port}`))