var express = require('express');
var app = express();
var path = require('path');
const bodyParser = require("body-parser");
// const flash = require('express-flash-notification'); 
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(express.urlencoded({extended: false}));
app.use(express.json());    
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static('public'))
app.use('/assets', express.static('assets'))
app.use('/', require('./routes/home/crud'));
app.use('/map', require('./routes/map/crud'));
app.use('/custom', require('./routes/custom/crud'));
app.use('/cluster', require('./routes/cluster/crud'));
app.use('/contains', require('./routes/contains/crud'));
app.use('/polygon', require('./routes/polygon/crud'));

/* const flashNotificationOptions = {
    beforeSingleRender: function(item, callback) {
      if (item.type) {
        switch(item.type) {
          case 'success':
            item.alertClass = 'alert-success';
            break;
          case 'error':
            item.alertClass = 'alert-danger';
            break;
        }
      }
      callback(null, item);
    }
  };
app.use(flash(app, flashNotificationOptions)); */


// app.use(express.bodyParser());

app.listen(3000, function(){
    console.log('Listening on 3000 Port');
});


module.exports = app;