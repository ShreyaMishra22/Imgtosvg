
var connection = require('../../conn')
function saveData(cb){
    var fs = require('fs');
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

function insertdata(tbl_nm,data,cb){
    // console.log(data,'--------data',tbl_nm)
    var query="INSERT INTO `"+tbl_nm+"` (EventType) VALUES ('"+data+"')";
    // console.log('--------query',query)
    connection.query(query,function(err,result){
         if(err){
             console.log('Error**************');
             cb(err);
             return;	
        }
        var query = connection.query('SELECT max(id) as LargestID FROM `'+tbl_nm+'`', (err, res) => {
            if (err) {
                cb(err);
                return;
            }
            console.log('--------------------table id',res[0].LargestID)
            cb(null,res[0].LargestID);
        });
    })
}

function insertLatLng(tbl_nm,data,cb){
    console.log(data,'--------data',tbl_nm)
    var query="INSERT INTO `"+tbl_nm+"` (Draw_Id, Latitude, Longitude) VALUES ('"+data[0].Draw_Id+"','"+data[0].Latitude+"','"+data[0].Longitude+"')";
    console.log('--------query',query)
    connection.query(query,function(err,result){
         if(err){
             console.log('Error**************');
             cb(err);
             return;	
        }else{
            cb(null, result)
        }
    })
}

function selectAll(cb){
    var query = 'SELECT  dt.*, LL.Latitude, LL.Longitude FROM `drawingtype` dt LEFT JOIN `latlng` LL ON dt.id = LL.Draw_Id WHERE dt.id =' +22;
    //    console.log(query)
        connection.query(query, (err, results) => {
            if (err) {
                cb(err);
                return;
            }else if(results[0]){
                cb(null,results[0]);
            }else{
                cb(null,[]);
            }
            
        });
}

module.exports = {
    saveData : saveData,
    insertdata : insertdata,
    insertLatLng : insertLatLng,
    selectAll :selectAll,
};