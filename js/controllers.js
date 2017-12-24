var map;
var markers = [];

function initMap() {
    let mapStyle = [{
            elementType: 'geometry',
            stylers: [{
                color: '#242f3e'
            }]
        },
        {
            elementType: 'labels.text.stroke',
            stylers: [{
                color: '#242f3e'
            }]
        },
        {
            elementType: 'labels.text.fill',
            stylers: [{
                color: '#746855'
            }]
        },
        {
            featureType: 'administrative.locality',
            elementType: 'labels.text.fill',
            stylers: [{
                color: '#d59563'
            }]
        },
        {
            featureType: 'poi',
            elementType: 'labels.text.fill',
            stylers: [{
                color: '#d59563'
            }]
        },
        {
            featureType: 'poi.park',
            elementType: 'geometry',
            stylers: [{
                color: '#263c3f'
            }]
        },
        {
            featureType: 'poi.park',
            elementType: 'labels.text.fill',
            stylers: [{
                color: '#6b9a76'
            }]
        },
        {
            featureType: 'road',
            elementType: 'geometry',
            stylers: [{
                color: '#38414e'
            }]
        },
        {
            featureType: 'road',
            elementType: 'geometry.stroke',
            stylers: [{
                color: '#212a37'
            }]
        },
        {
            featureType: 'road',
            elementType: 'labels.text.fill',
            stylers: [{
                color: '#9ca5b3'
            }]
        },
        {
            featureType: 'road.highway',
            elementType: 'geometry',
            stylers: [{
                color: '#746855'
            }]
        },
        {
            featureType: 'road.highway',
            elementType: 'geometry.stroke',
            stylers: [{
                color: '#1f2835'
            }]
        },
        {
            featureType: 'road.highway',
            elementType: 'labels.text.fill',
            stylers: [{
                color: '#f3d19c'
            }]
        },
        {
            featureType: 'transit',
            elementType: 'geometry',
            stylers: [{
                color: '#2f3948'
            }]
        },
        {
            featureType: 'transit.station',
            elementType: 'labels.text.fill',
            stylers: [{
                color: '#d59563'
            }]
        },
        {
            featureType: 'water',
            elementType: 'geometry',
            stylers: [{
                color: '#17263c'
            }]
        },
        {
            featureType: 'water',
            elementType: 'labels.text.fill',
            stylers: [{
                color: '#515c6d'
            }]
        },
        {
            featureType: 'water',
            elementType: 'labels.text.stroke',
            stylers: [{
                color: '#17263c'
            }]
        }
    ];
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

    document.getElementById('show-listings').addEventListener('click', showListings);
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
        console.log(markers);
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

        // infowindow.setContent('<div>' + marker.title + '<br>position: ' + marker.position + '</div>');
        infowindow.setContent('');
        infowindow.marker = marker;
        // infowindow.open(map, marker);
        infowindow.addListener('closeclick', function() {
            infowindow.setMarker(null);
        });
        var streetViewService = new google.maps.StreetViewService();
        let radius = 50;

        function getStreetView(data, status) {
            if (status == google.maps.StreetViewStatus.OK) {
                console.log('ok');
                var nearStreetViewLocation = data.location.latLng;
                var heading = google.maps.geometry.spherical.computeHeading(
                    nearStreetViewLocation, marker.position);
                console.log(heading);
                console.log(nearStreetViewLocation);
                infowindow.setContent('<div>' + marker.title + '</div><div id="pano">111111111111111111111111</div>');
                var panoramaOptions = {
                    position: nearStreetViewLocation,
                    pov: {
                        heading: heading,
                        pitch: 30
                    }
                };
                var panorama = new google.maps.StreetViewPanorama(
                    document.getElementById('pano'), panoramaOptions);
            } else {
                infowindow.setContent('<div>' + marker.title + '</div>' +
                    '<div>No Street View Found</div>');
            }
        };
        console.log(marker.position);

        streetViewService.getPanoramaByLocation(marker.position, radius, getStreetView);
        infowindow.open(map, marker);
    }
};

function makeMarkerIcon(iconColor) {
    var markerImage = new google.maps.MarkerImage('http://maps.google.cn/chart?chst=d_map_spin&chld=1.15|0|' + iconColor +
        '|40|_|%E2%80%A2',
        new google.maps.Size(21, 34),
        new google.maps.Point(0, 0),
        new google.maps.Point(10, 34),
        new google.maps.Size(21, 34));
    return markerImage;

};
