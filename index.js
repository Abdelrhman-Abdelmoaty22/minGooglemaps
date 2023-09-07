function initialize() {
    var mapOptions = {
        zoom: 10,
        center: new google.maps.LatLng(30.033333, 31.233334),
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        minZoom: 2
    };

    
    var map = new google.maps.Map(document.getElementById('map'), mapOptions);

    var infoWindow = new google.maps.InfoWindow();

    var marker = new google.maps.Marker({
        position : new google.maps.LatLng(24.5247, 39.5692),
        map : map,
        title: '"KSA , Madinah" '
    });

    marker.addListener('click',function(){
        infoWindow.setContent(marker.title);
        infoWindow.open(map , marker);
    })

    google.maps.event.addDomListener(window, "resive", function(){
        map.setContent(mapOptions.center)
    })

}

google.maps.event.addDomListener(window, 'load', initialize);