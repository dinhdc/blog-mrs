const express = require('express')
const cors = require('cors')
const axios = require('axios')
const {randomBytes} = require('crypto');

const app = express();
app.use(express.json())
app.use(cors());

let posts = {}

app.get('/posts', (req, res) => {
    res.send(posts)
});

app.post('/posts', async (req, res) => {
    const id = randomBytes(4).toString('hex');
    const {title} = req.body;

    posts[id] = {
        id, title
    }

    await axios.post('http://event-bus-srv:4005/events', {
        type: 'PostCreated',
        data: {
            id, title
        }
    })

    res.status(201).send(posts[id]);
});

app.post('/events', (req, res) => {
    console.log('Receive Event: ', req.body)
    res.send({})
})

app.listen(4000, () => {
    console.log('new version v1.0.0')
    console.log('Post services run on port 4000')
})