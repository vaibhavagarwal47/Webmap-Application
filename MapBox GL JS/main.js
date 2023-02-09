import airports from "./data/airports.json" assert { type: "json" };

mapboxgl.accessToken =
  "pk.eyJ1IjoidmFpYmhhdmFnZyIsImEiOiJjbGR2NmJyZjYwNTk4NDFwbzc1ZmRzeHpuIn0.T8oKBB7OSyonNf-MFq76Xw";
const locations = [
  {
    location: "Begumpet Airport",
    color: "green",
    longlat: [78.465478, 17.452365],
  },
  {
    location: "Rajiv Gandhi Airport",
    color: "blue",
    longlat: [78.432205, 17.229818],
  },
  {
    location: "Honeywell",
    color: "red",
    longlat: [78.344144, 17.418741],
  },
];

const map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/mapbox/satellite-streets-v11",
  projection: "globe", // Display the map as a globe, since satellite-v9 defaults to Mercator
  zoom: 10,
  center: [78.344144, 17.418741],
  antialias: true,
});
locations.forEach(({ location, color, longlat }) => {
  const popup = new mapboxgl.Popup({ offset: 25 }).setText(location);
  new mapboxgl.Marker({
    color: color,
    scale: 0.9,
  })
    .setLngLat(longlat)
    .setPopup(popup)
    .addTo(map);
});

const flight_route_hyd_del = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      properties: {},
      geometry: {
        coordinates: [
          [77.10604952504264, 28.538667276364095],
          [77.10153999289656, 28.53951618743413],
          [77.09445358523914, 28.540836702168946],
          [77.08586400019885, 28.54291176331037],
          [77.08242816618355, 28.543572001464824],
          [77.0763080868424, 28.54479814705823],
          [77.07115433581879, 28.545929961090792],
          [77.0663226942338, 28.547061762961576],
          [77.0609542035848, 28.54668449702271],
          [77.05601519218658, 28.545835643719528],
          [77.05000248265878, 28.54272312307748],
          [77.04806982602508, 28.538761600153848],
          [77.047640346773, 28.533007694431106],
          [77.04957300340669, 28.526687468708204],
          [77.05558571293454, 28.521876296586413],
          [77.06425325743999, 28.517610946906316],
          [77.07274480798583, 28.51417870492925],
          [77.0822553445987, 28.511194055889618],
          [77.08853909200343, 28.509701699698],
          [77.09584182547513, 28.507164645715108],
          [77.0992384456926, 28.505373747343597],
          [77.10476998111005, 28.49900909156986],
          [77.10637961470883, 28.49400354978856],
          [77.1075490257204, 28.488568122277968],
          [77.10683752147378, 28.48183616204875],
          [77.10705617576673, 28.47510756171158],
          [77.10693366211558, 28.471427511853307],
          [77.1074930340153, 28.464938573374283],
          [77.10720577590081, 28.46530916365397],
          [77.10819433158696, 28.461241256184834],
          [77.10883159050991, 28.45493109064941],
          [77.10968776026095, 28.45020388895246],
          [77.11047798247142, 28.44515492387596],
          [77.11231817056466, 28.437038380080025],
          [77.11285347097032, 28.430698927172685],
          [77.11432811769237, 28.42324104787285],
          [77.11521077287108, 28.41704687240609],
          [77.11879671400555, 28.407112526117885],
          [77.11962955495414, 28.401157587868624],
          [77.12157594263022, 28.3927620792616],
          [77.12190221139707, 28.38646304536377],
          [77.12409559581471, 28.37518958254617],
          [77.12508377712533, 28.367278095939483],
          [77.12843572000548, 28.357382836628574],
          [77.12985446102311, 28.34887444071083],
          [77.13136040036505, 28.34110283430165],
          [77.13154707679354, 28.33706325778725],
          [77.13102769614909, 28.34133694419873],
          [77.13483145168465, 28.32772632418113],
          [77.13734710473489, 28.316002139443953],
          [77.13952792454438, 28.302782115344556],
          [77.14071545233179, 28.27704023659362],
          [77.13909473501815, 28.25359748129229],
          [77.14426858931807, 28.22490481229599],
          [77.14293278128497, 28.196001320935267],
          [77.14795768315565, 28.160736184004918],
          [77.14935075577074, 28.138350106381637],
          [77.1556699464428, 28.09679508407143],
          [77.15333040107532, 28.05874749551593],
          [77.15189728079241, 28.01866721706071],
          [77.15718647258848, 27.989370026372384],
          [77.15123258327668, 27.95685401626571],
          [77.14678025229887, 27.91845577130097],
          [77.14383423128481, 27.88084729949641],
          [77.14337480924576, 27.83036586628411],
          [77.14000175572465, 27.792455446600343],
          [77.13987285252796, 27.79953164195331],
          [77.14141774695281, 27.774422627194113],
          [77.13916337178028, 27.73970581150273],
          [77.13135806429909, 27.679297584201862],
          [77.12650359068408, 27.61069009799118],
          [77.12583273559761, 27.56303389587221],
          [77.12138661686959, 27.48520283200922],
          [77.11544126726443, 27.444367160864147],
          [77.1077753732136, 27.396130776187192],
          [77.10680485229676, 27.324871007672726],
          [77.10814950038105, 27.285384071118727],
          [77.10077703355671, 27.22200194530778],
          [77.1005752036832, 27.19645094252516],
          [77.09526542811983, 27.149652427977685],
          [77.101758168294, 27.10619723393269],
          [77.10496654684096, 27.07367920969098],
          [77.1031431526743, 27.07556532588751],
          [77.10498067349477, 27.05046022761485],
          [77.10501501756113, 26.99996653476981],
          [77.11097669570051, 26.931630977144223],
          [77.10548280103325, 26.86560436443004],
          [77.10995470496647, 26.795917984279583],
          [77.11133526976181, 26.736806086970546],
          [77.11702370003803, 26.66605082339963],
          [77.11967037446834, 26.604603603310665],
          [77.14477998061341, 26.5250776658892],
          [77.15237982255184, 26.457164892946338],
          [77.1629367326039, 26.40461159416833],
          [77.1590724509935, 26.415367021358577],
          [77.16947051867794, 26.36893534294522],
          [77.1814532586381, 26.311709787059485],
          [77.19488485138066, 26.22246336865487],
          [77.20198976990139, 26.160686997086913],
          [77.2204351546361, 26.06716167790684],
          [77.22481631871051, 25.974181891592835],
          [77.23950641682853, 25.90508843215187],
          [77.26324546113261, 25.761756020885528],
          [77.28637660961965, 25.676272715051184],
          [77.30582593289671, 25.55976685112661],
          [77.3293413746847, 25.45807499337512],
          [77.3580372579845, 25.356300350665435],
          [77.37056983837891, 25.27040527938415],
          [77.38875624678121, 25.15866279764623],
          [77.39987160871772, 25.09639215532114],
          [77.41784258713938, 25.029633092218646],
          [77.43383311440152, 24.953047523541656],
          [77.44506772142893, 24.892937540162166],
          [77.45105102189507, 24.802259323189077],
          [77.45304810127908, 24.71059565133673],
          [77.45929627599526, 24.606791864962148],
          [77.45195975284724, 24.484430157886365],
          [77.46281655618941, 24.395262305425888],
          [77.48106221689096, 24.279233328390674],
          [77.48877543299102, 24.19824674267454],
          [77.50938532282697, 24.105217042189295],
          [77.51709923318151, 23.98149628653077],
          [77.54645109955192, 23.820005391788143],
          [77.5783797190083, 23.712526609651476],
          [77.5813926940121, 23.629605279549068],
          [77.57377326162151, 23.562139306593707],
          [77.56348026304545, 23.505595632501013],
          [77.55619874937321, 23.459753169300328],
          [77.54443084583585, 23.42606886645862],
          [77.50619616216397, 23.40584260229646],
          [77.48306583023304, 23.389346774397495],
          [77.47734152080159, 23.382669153057734],
          [77.47317701301483, 23.36440681625359],
          [77.47051689582179, 23.34745947528154],
          [77.46742998979886, 23.32885361621993],
          [77.4656959043619, 23.317965367378534],
          [77.46272904852157, 23.300221160911192],
          [77.46003780275754, 23.283852458027525],
          [77.45298830599995, 23.269394022559183],
          [77.44397361465218, 23.26831057074972],
          [77.42850005993017, 23.269152603619702],
          [77.41427241341137, 23.27149297175302],
          [77.40165247389268, 23.26729161865491],
          [77.3893381909806, 23.26639671937508],
          [77.379724301728, 23.27170489486565],
          [77.37151111926886, 23.27499499349115],
          [77.36515569243704, 23.27589097961635],
          [77.35944741192668, 23.27679787811185],
          [77.35608725793782, 23.277578534007844],
          [77.35262163672547, 23.27847752454278],
          [77.34864511719127, 23.27976997386429],
          [77.345666845957, 23.281794803576005],
          [77.34248667257327, 23.282941621569876],
          [77.34143026188264, 23.283441023678776],
          [77.33938387668121, 23.28439301636479],
          [77.33799760789816, 23.28493096271498],
          [77.33615515071506, 23.285710884573632],
          [77.33482843616633, 23.286544367604577],
          [77.33318263342267, 23.287314234046548],
          [77.33175222603302, 23.287879018004602],
          [77.32982930751717, 23.288989655775026],
          [77.3283373853044, 23.28954191366263],
          [77.32681087730407, 23.29033459137571],
          [77.32513262846783, 23.291099178650867],
          [77.32004495610022, 23.293699239655396],
        ],
        type: "LineString",
      },
    },
  ],
};

// // add markers to all the airports in the world
// airports.forEach(({ airport,lon,lat }) => {
// const popup = new mapboxgl.Popup({ offset: 25 }).setText(airport);
// new mapboxgl.Marker({
// color:'black',
// scale: 1.3,
// })
//   .setLngLat([lon,lat])
//   .setPopup(popup)
//   .addTo(map);
// });

const flight_route = [
  {
    location: "Indira Gandhi Airport",
    longlat: [77.09650927116166, 28.555742011562472],
  },
  {
    location: "Bhopal Airport",
    longlat: [77.32004495610022, 23.293699239655396],
  },
];

new mapboxgl.Marker({
  color: "grey",
  scale: 1,
})
  .setLngLat([77.09650927116166, 28.555742011562472])
  .addTo(map);
new mapboxgl.Marker({
  color: "grey",
  scale: 1,
})
  .setLngLat([77.32004495610022, 23.293699239655396])
  .addTo(map);

map.addControl(new mapboxgl.NavigationControl());
map.on("style.load", () => {
  map.setFog({}); // Set the default atmosphere style
  // place delhi bhopal route
  map.addSource("delhi_bhopal_route", {
    type: "geojson",
    data: "/data/del_bho_route.geojson",
  });
  // place boundaries of hyderabad
  map.addSource("hyd_bound", {
    type: "geojson",
    data: "/data/hyderabad-boundaries.geojson",
  });
  map.addLayer(
    {
      id: "hyd_bound_layer",
      type: "fill",
      source: "hyd_bound",
      paint: {
        "fill-color": [
          "match",
          ["get", "@id"],
          "relation/7867623",
          "red",
          "relation/7867620",
          "yellow",
          "relation/7868233",
          "green",
          "relation/7868278",
          "orange",
          "relation/7868416",
          "grey",
          "black",
        ],
      },
    },
    "road-label"
  );
  map.addLayer(
    {
      id: "hyd_bound_line",
      type: "line",
      source: "hyd_bound",
      paint: {
        "line-color": "white",
        "line-width": 2,
      },
    },
    "road-label"
  );
  map.addLayer({
    id: "del_bho_route",
    type: "line",
    source: "delhi_bhopal_route",
    paint: {
      "line-color": "white",
      "line-width": 2,
    },
  });
});

map.on("style.load", () => {
  map.addSource("polygons", {
    type: "geojson",
    data: "/data/polygon.geojson",
  });
  map.addLayer({
    id: "polygons",
    type: "fill",
    source: "polygons",
    paint: {
      "fill-color": "red",
      "fill-opacity": 0.3,
    },
  }),
    "road-label";
});

map.on("click", (e) => {
  // Set `bbox` as 5px reactangle area around clicked point.
  const bbox = [
    [e.point.x - 5, e.point.y - 5],
    [e.point.x + 5, e.point.y + 5],
  ];
  const [selectedzone] = map.queryRenderedFeatures(e.point, {
    layers: ["hyd_bound_layer"],
  });
  if (selectedzone) {
    const { name } = selectedzone.properties;
    alert(name);
  }
  console.log(bbox);
});



document.getElementById("fit").addEventListener("click", () => {
  map.fitBounds([
    [75.183107, 37.314615], // north corner of the bounds
    [77.438966, 7.891529], // south corner of the bounds
  ]);
});

document.getElementById("flytohon").addEventListener("click", () => {
  // Fly to a random location
  map.flyTo({
    center: [78.344144, 17.418741],
    essential: true, // this animation is considered essential with respect to prefers-reduced-motion
    zoom: 18,
    pitch: 70,
  });
});
document.getElementById("flytohyd").addEventListener("click", () => {
  // Fly to a random location
  map.flyTo({
    center: [78.491684, 17.38714],
    essential: true, // this animation is considered essential with respect to prefers-reduced-motion
    zoom: 11,
    pitch: 50,
  });
});

// ADD the 3D buildings
map.on("style.load", () => {
  // Insert the layer beneath any symbol layer.
  const layers = map.getStyle().layers;
  const labelLayerId = layers.find(
    (layer) => layer.type === "symbol" && layer.layout["text-field"]
  ).id;
  map.addLayer(
    {
      id: "add-3d-buildings",
      source: "composite",
      "source-layer": "building",
      filter: ["==", "extrude", "true"],
      type: "fill-extrusion",
      minzoom: 15,
      paint: {
        "fill-extrusion-color": "#aaa",
        "fill-extrusion-height": [
          "interpolate",
          ["linear"],
          ["zoom"],
          15,
          0,
          15.05,
          ["get", "height"],
        ],
        "fill-extrusion-base": [
          "interpolate",
          ["linear"],
          ["zoom"],
          15,
          0,
          15.05,
          ["get", "min_height"],
        ],
        "fill-extrusion-opacity": 0.6,
      },
    },
    labelLayerId
  );
});

map.on("style.load", () => {
  map.addSource("contours", {
    type: "vector",
    url: "mapbox://mapbox.mapbox-terrain-v2",
  });
  map.addLayer({
    id: "contours",
    type: "line",
    source: "contours",
    "source-layer": "contour",
    layout: {
      // Make the layer visible by default.
      visibility: "visible",
      "line-join": "round",
      "line-cap": "round",
    },
    paint: {
      "line-color": "black",
      "line-width": 1,
    },
  });
});

// // At low zooms, complete a revolution every two minutes.
// const secondsPerRevolution = 200;
// // Above zoom level 9, do not rotate.
// const maxSpinZoom = 9;
// // Rotate at intermediate speeds between zoom levels 3 and 5.
// const slowSpinZoom = 3;

// let userInteracting = false;
// let spinEnabled = true;

// function spinGlobe() {
//   const zoom = map.getZoom();
//   if (spinEnabled && !userInteracting && zoom < maxSpinZoom) {
//     let distancePerSecond = 360 / secondsPerRevolution;
//     if (zoom > slowSpinZoom) {
//       // Slow spinning at higher zooms
//       const zoomDif = (maxSpinZoom - zoom) / (maxSpinZoom - slowSpinZoom);
//       distancePerSecond *= zoomDif;
//     }
//     const center = map.getCenter();
//     center.lng -= distancePerSecond;
//     // Smoothly animate the map over one second.
//     // When this animation is complete, it calls a 'moveend' event.
//     map.easeTo({ center, duration: 1000, easing: (n) => n });
//   }
// }

// // Pause spinning on interaction
// map.on("mousedown", () => {
//   userInteracting = true;
// });

// // Restart spinning the globe when interaction is complete
// map.on("mouseup", () => {
//   userInteracting = false;
//   spinGlobe();
// });

// // These events account for cases where the mouse has moved
// // off the map, so 'mouseup' will not be fired.
// map.on("dragend", () => {
//   userInteracting = false;
//   spinGlobe();
// });
// map.on("pitchend", () => {
//   userInteracting = false;
//   spinGlobe();
// });
// map.on("rotateend", () => {
//   userInteracting = false;
//   spinGlobe();
// });

// // When animation is complete, start spinning if there is no ongoing interaction
// map.on("moveend", () => {
//   spinGlobe();
// });
// spinGlobe();






// // add a 3d plane model at the delhi airport
// var modelOrigin = [77.088425, 28.570616];
// const modelAltitude = 500;
// const modelRotate = [Math.PI / 2, 0, 0];

// var modelAsMercatorCoordinate = mapboxgl.MercatorCoordinate.fromLngLat(
//   modelOrigin,
//   modelAltitude
// );

// var modelTransform = {
//   translateX: modelAsMercatorCoordinate.x,
//   translateY: modelAsMercatorCoordinate.y,
//   translateZ: modelAsMercatorCoordinate.z,
//   rotateX: modelRotate[0],
//   rotateY: modelRotate[1],
//   rotateZ: modelRotate[2],
//   /* Since the 3D model is in real world meters, a scale transform needs to be
//    * applied since the CustomLayerInterface expects units in MercatorCoordinates.
//    */
//   scale: modelAsMercatorCoordinate.meterInMercatorCoordinateUnits(),
// };

// const THREE = window.THREE;
// // configuration of the custom layer for a 3D model per the CustomLayerInterface
// const customLayer = {
//   id: "3d-model",
//   type: "custom",
//   renderingMode: "3d",
//   onAdd: function (map, gl) {
//     this.camera = new THREE.Camera();
//     this.scene = new THREE.Scene();

//     // create two three.js lights to illuminate the model
//     const directionalLight = new THREE.DirectionalLight(0xffffff);
//     directionalLight.position.set(0, -70, 100).normalize();
//     this.scene.add(directionalLight);

//     const directionalLight2 = new THREE.DirectionalLight(0xffffff);
//     directionalLight2.position.set(0, 70, 100).normalize();
//     this.scene.add(directionalLight2);

//     // use the three.js GLTF loader to add the 3D model to the three.js scene
//     const loader = new THREE.GLTFLoader();
//     loader.load("./plane/scene.gltf", (gltf) => {
//       this.scene.add(gltf.scene);
//     });
//     this.map = map;

//     // use the Mapbox GL JS map canvas for three.js
//     this.renderer = new THREE.WebGLRenderer({
//       canvas: map.getCanvas(),
//       context: gl,
//       antialias: true,
//     });

//     this.renderer.autoClear = false;
//   },
//   render: function (gl, matrix) {
//     const rotationX = new THREE.Matrix4().makeRotationAxis(
//       new THREE.Vector3(1, 0, 0),
//       modelTransform.rotateX
//     );
//     const rotationY = new THREE.Matrix4().makeRotationAxis(
//       new THREE.Vector3(0, 1, 0),
//       modelTransform.rotateY
//     );
//     const rotationZ = new THREE.Matrix4().makeRotationAxis(
//       new THREE.Vector3(0, 0, 1),
//       modelTransform.rotateZ
//     );

//     const m = new THREE.Matrix4().fromArray(matrix);
//     const l = new THREE.Matrix4()
//       .makeTranslation(
//         modelTransform.translateX,
//         modelTransform.translateY,
//         modelTransform.translateZ
//       )
//       .scale(
//         new THREE.Vector3(
//           modelTransform.scale,
//           -modelTransform.scale,
//           modelTransform.scale
//         )
//       )
//       .multiply(rotationX)
//       .multiply(rotationY)
//       .multiply(rotationZ);

//     this.camera.projectionMatrix = m.multiply(l);
//     this.renderer.resetState();
//     this.renderer.render(this.scene, this.camera);
//     this.map.triggerRepaint();
//   },
// };

// map.on("style.load", () => {
//   map.addLayer(customLayer, "waterway-label");
// });






// // flight delhi to bhopal airport

//   // wait for the terrain and sky to load before starting animation
//   map.on('style.load', () => {
//   const animationDuration = 3000000;
//   const cameraAltitude = 600;
//   // get the overall distance of each route so we can interpolate along them
//   const routeDistance = turf.lineDistance(turf.lineString(flight_route_hyd_del.features[0].geometry.coordinates));
//   const cameraRouteDistance = turf.lineDistance(
//   turf.lineString(flight_route_hyd_del.features[0].geometry.coordinates)
//   );

//   let start;

//   function frame(time) {
//   if (!start) start = time;
//   // phase determines how far through the animation we are
//   const phase = (time - start) / animationDuration;

//   // phase is normalized between 0 and 1
//   // when the animation is finished, reset start to loop the animation
//   if (phase > 1) {
//   // wait 1.5 seconds before looping
//   setTimeout(() => {
//   start = 0.0;
//   }, 1500);
//   }

//   // use the phase to get a point that is the appropriate distance along the route
//   // this approach syncs the camera and route positions ensuring they move
//   // at roughly equal rates even if they don't contain the same number of points
//   const alongRoute = turf.along(
//   turf.lineString(flight_route_hyd_del.features[0].geometry.coordinates),
//   routeDistance * phase
//   ).geometry.coordinates;

//   const alongCamera = turf.along(
//   turf.lineString(flight_route_hyd_del.features[0].geometry.coordinates),
//   cameraRouteDistance * phase
//   ).geometry.coordinates;

//   const camera = map.getFreeCameraOptions();

//   // set the position and altitude of the camera
//   camera.position = mapboxgl.MercatorCoordinate.fromLngLat(
//   {
//   lng: alongCamera[0],
//   lat: alongCamera[1]
//   },
//   cameraAltitude
//   );

//   // // tell the camera to look at a point along the route
//   // camera.lookAtPoint({
//   // lng: alongRoute[0],
//   // lat: alongRoute[1]
//   // });

//   map.setFreeCameraOptions(camera);

//   window.requestAnimationFrame(frame);
//   }

//   window.requestAnimationFrame(frame);
//   });