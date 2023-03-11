const express = require('express'); //express.js use to create a server
const path = require('path'); // allows to know file location
const bodyParser = require('body-parser'); //send and receive the DATA
const knex = require('knex'); //allows the access to DB

const app = express();

let initialPath = path.join(__dirname, "public");

app.use(bodyParser.json());
app.use(express.static(initialPath));

app.get('/', (req, res) => {
    res.sendFile(path.join(initialPath, "index.html"));
})

app.get('/login', (req, res) => {
    res.sendFile(path.join(initialPath, "login.html"));
})

app.get('/register', (req, res) => {
    res.sendFile(path.join(initialPath, "register.html"));
})

app.listen(3000, (req, res) => {
    console.log('listening on port 3000......')
})





