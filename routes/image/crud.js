var express = require('express');
var router = express();
var path = require('path');
const Main = require("../../main");
const fs = require('fs');
const imageTracer = require("../../public/js/imagetracer");

router.get('/', function (req, res) {
    res.render('image',{
        Filename : '',
        test1 : Main.test1,
    });
});

router.post('/upload', function(req, results) { 
    
    var f1 = req.files.f1
    var f1_nm = f1.name
    var f1_path = path.join(__dirname,'../../public/img',f1_nm);

    f1.mv(f1_path);
    Main.test1(f1_path);
    results.render('image',{
        Filename : f1.name,
        test1 : Main.test1,
    })
}); 

router.post('/download', function(req, res) { 
    var data = req.body.Filedata;
    var fs = require('fs');
    fs.writeFile('D:/Imageformat/public/img/s.svg',data, function (err) {
    if (err) console.log (err);
    res.send('done');
    return;
    });

}); 
module.exports = router;    