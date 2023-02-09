import geojson from "./sample.geojson" assert { type: "json" };

// set a initial viewpoint for the map with zoom level 12
var map = L.map("map").setView([17.361692033968296, 78.4724261346172], 12);

// add the tiles to view the map
L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 20,
  attribution:
    '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);

var mapicon = L.icon({
  iconUrl: "./pin.png",
  iconSize: [30, 30],
  iconAnchor: [22, 94],
  popupAnchor: [-3, -76],
});

// add a marker to the map
var marker = L.marker([17.418771211200934, 78.34414648899417], {
  icon: mapicon,
}).addTo(map);

// add a circle shape to the map
var circle = L.circle([18.361692033968296, 80.4724261346172], {
  color: "red",
  fillColor: "#f03",
  fillOpacity: 0.5,
  radius: 30000,
}).addTo(map);

// popups
// create marker's popup
marker.bindPopup("<b>Hello</b><br>I am @Honeywell.").openPopup();
// create circle's popup
circle.bindPopup("You are clicking on Circle Layer.");

// add a polygon
const latlngs = [
  [17.998250728147795, 78.60725417779167],
  [17.821270082201067, 77.8898502798661],
  [17.340011664537002, 77.54443358827217],
  [16.65394871559667, 78.14227016987616],
  [16.755745462574666, 78.91281509727713],
  [17.403408102770328, 79.29808756097827],
  [17.998250728147795, 78.60725417779167],
];
var polygon = L.polygon(latlngs, { color: "green", fillOpacity: 0.3 }).addTo(
  map
);
polygon.bindPopup("Clicking in Polygon");

var latlng = [
  [28.6261906416418, 77.19585254257117],
  [27.749382812281127, 77.23189603891399],
  [27.186533474526357, 78.01043555991942],
  [26.19778750532889, 78.15619827453054],
  [25.175975796100857, 75.83803251338534],
  [23.207095687176405, 75.77083876403245],
  [20.918772775465825, 77.76983532892302],
  [19.964806630136223, 79.29848660370612],
  [17.362996060007234, 78.45857311023661],
];

var polyline = L.polyline(latlng, { color: "black" }).addTo(map);


L.geoJSON(geojson, {
  style: function (feature) {
    return { color: "blue" };
  },
  pointToLayer: function (geojson,latlang){
    return L.marker(latlang,{
        icon: mapicon
    });
  },
  onEachFeature: function (feature, layer) {
    if (feature.geometry.type === "Point") {
      layer.bindPopup(`<b>${feature.geometry.coordinates.join(",")}</b>`);
    }
  },
}).addTo(map);



// adding custom image and video layers on the map
var imageUrl = 'https://maps.lib.utexas.edu/maps/historical/newark_nj_1922.jpg',
    imageBounds = [[28.6261906416418, 77.19585254257117], [25.186533474526357, 68.01043555991942]];
L.imageOverlay(imageUrl, imageBounds,{zIndex:1}).addTo(map);

var videoUrl = 'https://www.mapbox.com/bites/00188/patricia_nasa.webm',
    videoBounds = [[17.418771211200934, 78.344146488994170], [20.186533474526357, 58.01043555991942]];
L.videoOverlay(videoUrl, videoBounds ).addTo(map);





// // Initialise the FeatureGroup to store editable layers
// var drawnItems = new L.FeatureGroup();
// map.addLayer(drawnItems);
// // Initialise the draw control and pass it the FeatureGroup of editable layers

// var drawControl = new L.Control.Draw({
//   edit: {
//     featureGroup: drawnItems,
//   },
// });
// map.addControl(drawControl);

// map.on("draw:created", function (e) {
//   var type = e.layerType,
//     layer = e.layer;
//   // Show popup on marker when user’s action triggers
//   if (type === "marker") {
//     layer.bindPopup("A popup!");
//   }
//   drawnItems.addLayer(layer);
// });

// map.addControl(drawControl);
// map.on("draw:created", function (e) {
//   var type = e.layerType,
//     layer = e.layer;

//   // Shows popup on marker when user’s action triggers

//   if (type === "marker") {
//     layer.bindPopup("A popup!");
//   }
//   drawnItems.addLayer(layer);
// });
