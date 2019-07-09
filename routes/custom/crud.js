var express = require('express');
var router = express.Router();
var getModel = require('./model');
var fs = require('fs');
var async = require('async');

router.get('/', function (req, res) {
    getModel.selectAll((err, Result) => {          
        if (err) {
            return;
        }
        console.log('================result',Result);
        res.render('custom',{     
            Result : Result,
        });
    }); 

});
router.get('/save-Data/:ID', function (req, res) {
    var Data = req.params.ID;
    var Parsed_data = JSON.parse(Data);
    var PolyData = Parsed_data.LatLng;
    var EventName = Parsed_data.type;
    async.waterfall([
        function(cb){
            getModel.insertdata('DrawingType', EventName, (err, LargeID) => {
                if (err) {
                    console.log('Error in Inserting Data in Drawing Tool table',err);
                    cb(err);
                    return;
                } else {
                    console.log('Successfully Inserted Data in Drawing Tool table',LargeID);
                    cb(null,LargeID)
                
                }
           });
        },
        function(LargeID,cb){
             for(var i=0; i < PolyData.length; i++){
                var LatlngData = [{
                    Draw_Id : LargeID,
                    Latitude: PolyData[i].latitude,
                    Longitude:PolyData[i].longitude,
                }];
                getModel.insertLatLng('latlng', LatlngData, (err, res) => {
                    if (err) {
                        console.log('Error in Inserting Data  in latlong table',err);
                        return;
                    } else {
                        console.log('Successfully Inserted Data in latlong table',res);
                    
                    }
                });
            }
        }
    ], function (finalError, finalResponse) {
        if (finalError) {
            console.log('---------------------Final Error',finalError)
         
        }
       else {
         
        } 
    });
    // }

});

// router.post('/save-Dataa', function (req, res) {

//     console.log('coming in save data xxxxxxxxxxxxxx',req);
// /*     getModel.saveData((err, Msg) => {          
//         if (err) {
//             return;
//         }
//         console.log('return message*************',Msg);
//         res.render('custom',{
           
            
//         });
//     }); */

// });


module.exports = router;    