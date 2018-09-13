// bring in express
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// uses
app.use(express.static('server/public'));
app.use(bodyParser.urlencoded({extended: true}));

// globals
const PORT = 5000;

// spin up server
app.listen(PORT, () => {
    console.log('server is up on port:', PORT); 
});
