

function saveData(cb){
    var fs = require('fs');
    console.log('*****')
    fs.readFile("myfile.txt",  function(err, data) {
            if (err) 
            { 
                cb(err);
                return;
            }
            cb(null,'Read the file');
        fs.writeFile("myfile.txt", function(err, data) {
            if (err) 
            { 
                cb(err);
                return;
            }
            cb(null,'Written in file');
            console.log("successfully written our update data to file");
        });
    });
}
module.exports = {
    saveData:saveData,
};