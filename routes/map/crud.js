var express = require('express');
var router = express.Router();
var data = require('../../data.json');

router.get('/', function (req, res) {
    // console.log('---------------')
    res.render('map',{
        Markerdata : data,
    });
});

module.exports = router;    