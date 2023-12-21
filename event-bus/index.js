const express = require('express')
const cors = require('cors')
const axios = require('axios')

const events = [];

const app = express();
app.use(express.json());
app.use(cors())

app.get("/events", (req, res) => {
    res.send(events);
})

app.post('/events', (req, res) => {
    const event = req.body;

    events.push(event);

    axios.post('http://posts-clusterip-srv:4000/events', event).catch((err) => {
        console.log(err.message);
    });
    // axios.post('http://localhost:4001/events', event).catch((err) => {
    //     console.log(err.message);
    // });
    // axios.post('http://localhost:4002/events', event).catch((err) => {
    //     console.log(err.message);
    // });
    // axios.post("http://localhost:4003/events", event).catch((err) => {
    //     console.log(err.message);
    // });
    res.send({status: 'OK'});
})

app.listen(4005, () => {
    console.log('Listening on port 4005')
})