var express = require('express');
var calendarController = require('./controllers/calendarController');

var app = express();

app.set('view engine', 'ejs');

app.use(express.static('./assets'));

calendarController(app);

app.listen(3000);