function SaveData(eventType,ArrayData) {
    var type = eventType;
    var Postdata = {LatLng : ArrayData, type : type}
    var object = JSON.stringify(Postdata);
    $(document).ready(function() {
        $.ajax({
            url: '/custom/save-Data/'+object,
            // dataType: "jsonp",
            // jsonpCallback: "_typecb",
            // cache: false,
            // timeout: 5000,
            success: function(data) {
                // $("#type").append(data);
                $("#LatLng").append(data);
                
            },
            error: function(jqXHR, textStatus, errorThrown) {
                // alert('error 222222222222222222' + textStatus + " " + errorThrown);
            }
        });
    });
}

