var express = require('express');
var app = express();
var path = require('path');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


app.use('/', require('./routes/home/crud'));
app.use('/map', require('./routes/map/crud'));
app.use('/custom', require('./routes/custom/crud'));

app.listen(3000, function(){
    console.log('Listening on 3000 Port');
});

module.exports = app;