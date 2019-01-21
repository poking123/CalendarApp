var mongoose = require('mongoose');

// Connect to the database
mongoose.conntect('mongodb://dushen:Dachahu6493!@ds145639.mlab.com:45639/calendar');

// schema
var calendarSchema = new mongoose.Schema({
   item: String 
});

var Calendar = mongoose.model('Calendar', calendarSchema);

module.exports = function(app) {
    app.get('/', function(req, res) {
        // get data from mongodb and pass it to the view
        Calendar.find({}, function(err, data) {
            if (err) throw err;
            res.render('calendar', {data: data});
        });
        
    })
}