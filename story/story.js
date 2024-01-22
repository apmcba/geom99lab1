// declare variables that will be used in this example
    var myMap;                  
    var centerpoint;            
    var markers = [];           
    var kmRadius = 16;          

    /* Initialization function that sets up the map */
    function initialize() {
        // build the map's center poiint
        centerpoint = new google.maps.LatLng(45.068889, -66.454722);
        var mapOptions = {
            zoom: 5, 
            center: centerpoint
        };

        myMap = new google.maps.Map(
            document.getElementById('map-canvas'), 
            mapOptions
        );
