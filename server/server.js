// bring in express
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// uses
app.use(express.static('server/public'));
app.use(bodyParser.urlencoded({extended: true}));

// globals
const PORT = 5000;
let shells = [
    {type: 'Conch', color: 'Pink'},
    {type: 'Blue', color: 'Blue'}
];

app.get('/shells', (req, res) => {
    res.send(shells);
});

// spin up server
app.listen(PORT, () => {
    console.log('server is up on port:', PORT); 
});
