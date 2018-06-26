const express = require('express');
const app = express();
const http = require('http').createServer(app);

app.use('/', express.static(__dirname));
app.set('view engine', 'pug');

// route handler
app.get('/', (req, res) => {
    res.render('index');
})

// listen
http.listen(8000, (err) => console.log(err? 'Error': 'Listening...'));