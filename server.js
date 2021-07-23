const express = require('express');
const morgan = require('morgan');

const hostname = 'localhost';
const port = 3000;

const app = express(); //returns an express server app now available under the variable name app
app.use(morgan('dev')); //configure morgan middleware to log using the dev version
app.use(express.json()); //used to parse json formatted data in the body into js properties of the request data

//support for rest api endpoints
//default routing methods
app.all('/campsites', (req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next(); //pass control of routing to next relevant routing method or it would end here
});

app.get('/campsites', (req, res) => {
    res.end('Will send all campsites to you');
});

app.post('/campsites', (req, res) => {
    res.end(`Will add the campsite: ${req.body.name} with the description: ${req.body.description}`);
});

app.put('/campsites', (req, res) => {
    res.statusCode = 403;
    res.end('Put operation not supported on /campsites');
});

app.delete('/campsites', (req, res) => {
    res.end('Deleting all campsites');
});

app.get('/campsites/:campsiteId', (req, res) => {
    res.end(`Will send details of the campsite: ${req.params.campsiteId} to you`);
});

app.post('/campsites/:campsiteId', (req, res) => {
    res.statusCode = 403;
    res.end(`POST operation not supported on /campsites/${req.params.campsiteId}`);
});

app.put('/campsites/:campsiteId', (req, res) => {
    res.write(`Updating the campsite: ${req.params.campsiteId}\n`);
    res.end(`Will update the campsite: ${req.body.name} with description ${req.body.description}`);
});

app.delete('/campsites/:campsiteId', (req, res) => {
    res.end(`Deleting campsite: ${req.params.campsiteId}`);
});

//setup express to serve files from the public folder using middleware function express.static
app.use(express.static(__dirname + '/public')); 

//set up server to return the same response for any request
//app.use accepts a callback function known as a middleware function
app.use((req, res) => {
    res.statusCode= 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<html><body><h1>This is an Express Server</h1></body></html>');
});

//create a server. app.listen creates an instance of http server class and listens to it
app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});