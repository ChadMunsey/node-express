const express = require('express');
const campsiteRouter = express.Router();

//support for rest api endpoints
campsiteRouter.route('/')
//all method is the default routing method, ^^all method is chained to this route
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next(); //pass control of routing to next relevant routing method or it would end here
})
.get((req, res) => {
    res.end('Will send all campsites to you');
})
.post((req, res) => {
    res.end(`Will add the campsite: ${req.body.name} with the description: ${req.body.description}`);
})
.put((req, res) => {
    res.statusCode = 403;
    res.end('Put operation not supported on /campsites');
})
.delete((req, res) => {
    res.end('Deleting all campsites');
});

module.exports = campsiteRouter;