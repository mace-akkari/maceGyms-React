const express = require('express');
const parser = require('body-parser');

const PORT = 8080;

const server = express();

const classes = require('./exampleClasses.json');

const addAttendee = (attendee, id) => {
    classes[id].attendees.push(attendee)
};

server.use(parser.json());

server.use((req, res, next) => {
    res.set('Content-Type', 'application/json');
    res.set('Access-Control-Allow-Origin', '*')
    next();
});

server.get('/classes', (req, res) => {
    res.json(classes);
});

server.put('/class/attendees', (req, res) => {
    const { id, name } = req.body;
    addAttendee(name, id);
    res.json("OK");
})

server.listen(PORT);