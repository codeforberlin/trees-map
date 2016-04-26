var _map;

$(document).ready(function() {
    _map = L.map('map');

    var view = {
        "center": [52.51,13.37628],
        "zoom": 15
    };

    var base = {
        'Open Street Map': L.tileLayer("http://tile.openstreetmap.org/{z}/{x}/{y}.png", {
            "attribution": "Map data © 2012 OpenStreetMap contributors",
            "minZoom": 8,
            "maxZoom": 20
        })
    };

    var overlay = {
        'Alle Bäume': L.tileLayer("http://trees.codefor.de/tiles/trees/{z}/{x}/{y}.png", {
            "attribution": "Geoportal Berlin / Baumbestand Berlin",
            "minZoom": 8,
            "maxZoom": 20
        })
    };

    base['Open Street Map'].addTo(_map);

    L.control.layers(base, overlay, { collapsed: false }).addTo(_map);

    _map.setView(view.center, view.zoom);
});
