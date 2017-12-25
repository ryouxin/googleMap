var locations = [{
        title: '星海广场',
        location: {
            lat: 38.8812423,
            lng: 121.5830108
        }
    },
    {
        title: '老虎滩海洋公园',
        location: {
            lat: 38.877848,
            lng: 121.676866
        }
    },
    {
        title: '棒棰岛宾馆',
        location: {
            lat: 38.8890004,
            lng: 121.7044535
        }
    },
    {
        title: '圣亚海洋世界',
        location: {
            lat: 38.878401,
            lng: 121.570719
        }
    },
    {
        title: '大连森林动物园',
        location: {
            lat: 38.880027,
            lng: 121.61316
        }
    },
    {
        title: '大连外国语大学',
        location: {
            lat: 38.809188,
            lng: 121.310176
        }
    },
    {
        title: '东北财经大学',
        location: {
            lat: 38.876483,
            lng: 121.549925
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
