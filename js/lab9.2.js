//document.addEventListener('DOMContentLoaded', function() {
/*
    your code will go here
    this is the event callback function that is called when the document content has been loaded
    we need our map container to be ready before dropping our map in, for example
    *this is new as js bin takes care of this for you
    */

//});

var map = L.map('map').setView([39.5501, -105.7821], 7);
L.esri.basemapLayer('ImageryClarity').addTo(map);
L.esri.basemapLayer('ImageryTransportation').addTo(map);
L.esri.basemapLayer('ImageryLabels').addTo(map);


var stateParks = L.esri.featureLayer({
    url: 'https://services.arcgis.com/YseQBnl2jq0lrUV5/arcgis/rest/services/CPW_Weeds_Trt_Track/FeatureServer/1',
    style: function () {
        return { color: "#e2f310", weight: 3
               };
    }
}).addTo(map);