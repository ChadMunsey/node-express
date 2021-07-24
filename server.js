const express = require('express');
const morgan = require('morgan');
const campsiteRouter = require('./routes/campsiteRouter');
const promotionRouter = require('./routes/promotionRouter');
const partnerRouter = require('./routes/partnerRouter');

const hostname = 'localhost';
const port = 3000;

const app = express(); //returns an express server app now available under the variable name app
app.use(morgan('dev')); //configure morgan middleware to log using the dev version
app.use(express.json()); //used to parse json formatted data in the body into js properties of the request data

//specify the route path for router module
app.use('/campsites', campsiteRouter);
app.use('/promotions', promotionRouter);
app.use('/partners', partnerRouter);

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