"use strict";

// make the calendar with a specified month and year
var makeCalendar = function(year, month, day) {
    // makes the heading date
    var heading = document.getElementById('heading');
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var monthName = monthNames[month];
    heading.innerHTML = monthName + ' ' + year;

    // makes the calendar
    var cal = document.getElementById('calendar');
    cal.innerHTML = "";

    var daysOfTheWeek = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

    // make the table headers (day names)
    var tr = document.createElement('tr');
    for (var i = 0; i < 7; i++) {
        var th = document.createElement('th');
        th.innerHTML = daysOfTheWeek[i];
        tr.appendChild(th);
    }
    cal.appendChild(tr);

    // make the days of the calendar
    var firstDate = new Date(year, month, 1);
    var lastDate = new Date(year, month, 0);

    var firstDay = firstDate.getDay(); // 0-6
    var totalDays = lastDate.getDate(); // like 31
    var dayCounter = 1;
    var started = false;


    // keeps on adding rows until all the days are added
    while (dayCounter <= totalDays) {
        tr = document.createElement('tr');

        for (var i = 0; i < 7; i++) { // adds tds to tr
            var td = document.createElement('td');
            
            if (!started) {
                if (i === firstDay) {
                    started = true;
                    td.innerHTML = dayCounter;
                    if (dayCounter === day) td.classList.add('highlight');
                    dayCounter++;
                }
            } else {
                if (dayCounter <= totalDays) {
                    td.innerHTML = dayCounter;
                    if (dayCounter === day) td.classList.add('highlight');
                    dayCounter++;
                }

            }
            // adds td to row inside for loop
            tr.appendChild(td);
        }
        // adds tr to table
        cal.appendChild(tr);
    }


};

var date = new Date();
makeCalendar(date.getFullYear(), date.getMonth(), date.getDate());