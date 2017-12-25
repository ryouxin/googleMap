var locations = [{
        title: 'Park Ave Penthouse',
        location: {
            lat: 40.7713024,
            lng: -73.9632393
        }
    },
    {
        title: 'Chelsea Loft',
        location: {
            lat: 40.7444883,
            lng: -73.9949465
        }
    },
    {
        title: 'Union Square Open Floor Plan',
        location: {
            lat: 40.7347062,
            lng: -73.9895759
        }
    },
    {
        title: 'East Village Hip Studio',
        location: {
            lat: 40.7281777,
            lng: -73.984377
        }
    },
    {
        title: 'TriBeCa Artsy Bachelor Pad',
        location: {
            lat: 40.7195264,
            lng: -74.0089934
        }
    },
    {
        title: 'Chinatown Homey Space',
        location: {
            lat: 40.7180628,
            lng: -73.9961237
        }
    },
    {
        title: 'Times Square',
        location: {
            lat: 40.758895,
            lng: -73.985131
        }
    }
];


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
