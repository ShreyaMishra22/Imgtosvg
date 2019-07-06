function SaveData(DataArray) {
    console.log('DataArray====',DataArray)
    
    /* $.post("/custom/save-Data",
    {
        name: "Donald Duck",
        city: "Duckburg"
    },
    function(data, status){
        alert("Data: " + data + "\nStatus: " + status);
    });
 */
   /*  $.ajax({
        url: '/custom/save-Dataa',
        type: 'POST',
        data: {latitude : lat, longitude : lng},
        dataType: "application/json",
        'Content-Type': 'application/x-www-form-urlencoded',

        success: function (res) {
            console.log(lat,lng);
            if(res){
                console.log('=====successfully saved')
            }    
        } 
    }); */


    /* $.post("/custom/save-Dataa", { 
        name: "GFG", 
    }, 
      
    function(data,status) { 
        document.getElementById("gfg").innerHTML 
                = data; 
        document.getElementById("b").innerHTML 
                = "Data Passed"; 
    });  */

    var test = JSON.stringify(DataArray);
    console.log('test********',test)
    $(document).ready(function() {
        $.ajax({
            url: '/custom/save-Data/'+test,
            // dataType: "jsonp",
            // jsonpCallback: "_testcb",
            // cache: false,
            // timeout: 5000,
            success: function(data) {
                $("#test").append(data);
            },
            error: function(jqXHR, textStatus, errorThrown) {
                // alert('error 222222222222222222' + textStatus + " " + errorThrown);
            }
        });
    });


 }