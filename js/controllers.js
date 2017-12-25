var map;
var markers = [];

function initMap() {

    map = new google.maps.Map(document.getElementById('map'), {
        center: {
            lat: 39.9136376,
            lng: 116.4095254
        },
        zoom: 13,
        styles: mapStyle,
        mapTypeControl: false,
    });
    // TODO: use a constructor to create a new map JS object. You can use the coordinates
    // we used, 40.7413549, -73.99802439999996 or your own!
    showListings();
    // document.getElementById('show-listings').addEventListener('click', showListings);
    document.getElementById('hide-listings').addEventListener('click', HideListings);
};

function showListings() {
    var largeInfowindow = new google.maps.InfoWindow();
    var bounds = new google.maps.LatLngBounds();
    let defaultIcon = makeMarkerIcon('0091ff');
    let highlightedIcon = makeMarkerIcon('FFFF24');
    for (var i = 0; i < locations.length; i++) {
        var position = locations[i].location;
        var title = locations[i].title;
        var marker = new google.maps.Marker({
            position: position,
            map: map,
            title: title,
            animation: google.maps.Animation.DROP,
            id: i,
            icon: defaultIcon

        });
        markers.push(marker);
        bounds.extend(marker.position);
        marker.addListener('click', function() {
            populateInfoWindow(this, largeInfowindow);
        });
        marker.addListener('mouseover', function() {
            this.setIcon(highlightedIcon);
        });
        marker.addListener('mouseout', function() {
            this.setIcon(defaultIcon);
        });
    }
    map.fitBounds(bounds);
};

function HideListings() {
    console.log(markers);
    for (var i of markers) {
        i.setMap(null);
    }
};


function populateInfoWindow(marker, infowindow) {

    if (infowindow.marker != marker) {
        infowindow.setContent('');
        infowindow.marker = marker;
        //mark详细信息
        let markerDesc = '';
        let _vikiRequeryUrl = `https://en.wikipedia.org/w/api.php?action=query&titles=${marker.title}&prop=revisions&rvprop=content&format=json`;
        $.ajax({
            url: _vikiRequeryUrl,
            // data: queryData,
            dataType: 'json',
            type: 'POST',
            headers: {
                'Api-User-Agent': 'MyCoolTool/1.1 (http://aamen.jian-yin.com/; chen.yes.man@gmail.com) BasedOnSuperLib/1.4'
            },
            success: function(response) {
                // markerDesc=
                console.log(response);
            },
            error: function(err) {
                console.log(err);
            }
        });
        console.log(_vikiRequeryUrl);
        infowindow.setContent('<div>' + marker.title + '<br>position: ' + markerDesc + '</div>');
        infowindow.open(map, marker);
        //
        infowindow.addListener('closeclick', function() {
            infowindow.setMarker(null);
        });



        //获取街景图片
        // var streetViewService = new google.maps.StreetViewService();
        // let radius = 50;
        //
        // function getStreetView(data, status) {
        //     if (status == google.maps.StreetViewStatus.OK) {
        //         console.log('ok');
        //         var nearStreetViewLocation = data.location.latLng;
        //         var heading = google.maps.geometry.spherical.computeHeading(
        //             nearStreetViewLocation, marker.position);
        //         console.log(heading);
        //         console.log(nearStreetViewLocation);
        //         infowindow.setContent('<div>' + marker.title + '</div><div id="pano"></div>');
        //         var panoramaOptions = {
        //             position: nearStreetViewLocation,
        //             pov: {
        //                 heading: heading,
        //                 pitch: 30
        //             }
        //         };
        //         var panorama = new google.maps.StreetViewPanorama(
        //             document.getElementById('pano'), panoramaOptions);
        //     } else {
        //         infowindow.setContent('<div>' + marker.title + '</div>' +
        //             '<div>No Street View Found</div>');
        //     }
        // };
        // console.log(marker.position);
        //
        // streetViewService.getPanoramaByLocation(marker.position, radius, getStreetView);
        // infowindow.open(map, marker);
    }
};

function makeMarkerIcon(iconColor) {
    var markerImage = new google.maps.MarkerImage('http://chart.googleapis.com/chart?chst=d_map_spin&chld=1.15|0|' + iconColor +
        '|40|_|%E2%80%A2',
        new google.maps.Size(21, 34),
        new google.maps.Point(0, 0),
        new google.maps.Point(10, 34),
        new google.maps.Size(21, 34));
    return markerImage;

};
