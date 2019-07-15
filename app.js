var express = require('express');
var app = express();
var path = require('path');
var fileupload=require('express-fileupload');
const bodyParser = require("body-parser");
<<<<<<< HEAD

app.use(bodyParser.urlencoded({limit: '500mb', extended: true}));
app.use(bodyParser.json())

app.set('views',path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static('public'))
app.use(bodyParser.urlencoded({extended: true}));

// app.use(bodyParser.urlencoded());

app.use(express.urlencoded({extended: false}));
=======
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
>>>>>>> 835fac5aabb9173280f5b472702df897627283fa

app.use(express.json()); 
app.use(fileupload());

app.use('/image', require('./routes/image/crud'));
app.listen(3001, function(){
    console.log('Listening on 3001 Port');
});


module.exports = app;