var express = require('express');
var app = express();
var path = require('path');
var fileupload=require('express-fileupload');
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({limit: '500mb', extended: true}));
app.use(bodyParser.json())

app.set('views',path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static('public'))
app.use(bodyParser.urlencoded({extended: true}));

// app.use(bodyParser.urlencoded());

app.use(express.urlencoded({extended: false}));

app.use(express.json()); 
app.use(fileupload());

app.use('/image', require('./routes/image/crud'));
app.listen(3001, function(){
    console.log('Listening on 3001 Port');
});


module.exports = app;