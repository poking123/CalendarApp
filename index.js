var express = require('express');

var app = express();

app.set('view engine', 'ejs');

app.use('/css', express.static('css'));
app.use('/js', express.static('js'));
app.use('/img', express.static('img'));

app.get('/', function(req, res) {
    res.render('calendar');
});

app.listen(3000);