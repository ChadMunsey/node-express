const express = require('express');

const hostname = 'localhost';
const port = 3000;

const app = express(); //returns an express server app now available under the variable name app

//set up server to return the same response for any request
//app.use accepts a callback function known as a middleware function
app.use((req, res) => {
    console.log(req.headers);
    res.statusCode= 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<html><body><h1>This is an Express Server</h1></body></html>');
});

//create a server. app.listen creates an instance of http server class and listens to it
app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});