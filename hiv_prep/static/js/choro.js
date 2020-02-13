// // Creating map object
// var myMap = L.map("choromap", {
//   center: [37.8, -96],
//   zoom: 4
// });

// //Adding title layer
// L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
//   attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
//   maxZoom: 5,
//   id: "mapbox.light",
//   accessToken: API_KEY
// }).addTo(myMap);


// //Load geojson data
// var statesData = "new_HIV_case_rate.geo.json";
// console.log(statesData);
// var geojson;

// //grab data with d3
// d3.json(statesData).then(function(data) {
//     console.log(data);
//     //Create a new choropleth layer
//     geojson = L.choropleth(data, {
//         //Define what property in the features to use (edit this code)
//         valueProperty: "2008-2012",
//         //Set color scale
//         scale:["65FFF6","#1B283A"],
//         //Number of breaks in step range (edit this code (not sure how many yet))
//         steps: 5,
//         // q for quartile, e for equidistant, k for k-means
//         mode: "q",
//         style: {
//             //Border color
//             color: "#1B283A",
//             weight: .5,
//             fillOpacity: 0.8
//         },

//         //Binding a pop-up to each layer
//         // onEachFeature: function(feature, layer) {
//         //     layer.bindPopup(feature.properties.State_Name + "<br>" + feature.properties[State_Name]);
//         // }
//     }).addTo(myMap);

//     //Set up the legend
//     var legend = L.control({position: "bottomleft" });
//     legend.onAdd = function() {
//       var ele = document.getElementsByClassName("info legend leaflet-control");
//       while(ele.length>0) {
//         ele[0].parentNode.removeChild(ele[0]);
//       }
//       var div = L.DomUtil.create("div", "info legend");
//       var limits = geojson.options.limits;
//       var colors = geojson.options.colors;
//       var labels = [];

//       //Add title (what should we title this? is this really a rate?), min & max
//       var legendInfo = "<h4>New HIV Cases</h4>" + "<div align=\"center\" class=\"p\">" + "Cases per 100,000 population" + "</div>" +
//        "<div class=\"labels\">" + 
//        "<div class=\"min\">" + limits[0].toFixed(3) + "</div>" +
//          "<div class=\"max\">" + limits[limits.length - 1].toFixed(3) +"</div>" +
//          "</div>";

//       div.innerHTML = legendInfo;

//       limits.forEach(function(limit, index) {
//         labels.push("<li style=\"background-color: " + colors[index] + "\"></li>");
//       });
//       div.innerHTML += "<ul>" + labels.join("") + "</ul>";
//       return div;
        
// }
// //Add legend to the map
// legend.addTo(myMap);
// });



// Creating map object
var myMap = L.map("choromap", {
  center: [37.8, -96],
  zoom: 4
});

// Adding tile layer
L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
  attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
  maxZoom: 5,
  id: "mapbox.light",
  accessToken: API_KEY
}).addTo(myMap);


// Load in geojson data
var geoData = "new_HIV_case_rate.geojson";
console.log(geoData);

var geojson;
var geojson1;


//Define Before Choropleth
// Grab data with d3
d3.json(geoData).then(function(data) {
  console.log(data);

  // Create a new choropleth layer
  geojson = L.choropleth(data, {

    // Define what  property in the features to use
    valueProperty: "Before Prep",

    // Set color scale
    scale: ["65FFF6","#1B283A"],

    // Number of breaks in step range
    steps: 10,

    // q for quartile, e for equidistant, k for k-means
    mode: "q",
    style: {
      // Border color
      color: "#fff",
      weight: 1,
      fillOpacity: 0.8
    },

    // Binding a pop-up to each layer
    onEachFeature: function(feature, layer) {
      layer.bindPopup(feature.properties["State Name"] + "<br>" +
        + feature.properties["Before Prep"]);
    }

  }).addTo(myMap);

  // Set up the legend
  var legend = L.control({ position: "bottomleft" });
  legend.onAdd = function() {
    var div = L.DomUtil.create("div", "info legend");
    var limits = geojson.options.limits;
    var colors = geojson.options.colors;
    var labels = [];

    // Add legend info, min & max
    var legendInfo = "<h4>Rate of Cases per 100,000 population</h4>" +
      "<div class=\"labels\">" +
        "<div class=\"min\">" + parseInt(limits[0]) + "</div>" + "<div class=\"max\">" + parseInt(limits[limits.length - 1]) +"</div>" + "</div>";
      "</div>";

    div.innerHTML = legendInfo;

    limits.forEach(function(limit, index) {
      labels.push("<li style=\"background-color: " + colors[index] + "\"></li>");
    });

    div.innerHTML += "<ul>" + labels.join("") + "</ul>";
    return div;
  };

  // Adding legend to the map
  legend.addTo(myMap);

});




//Define building the Choropleths
function updateChoro() {
  // geojson.refresh();
// Grab data with d3
d3.json(geoData).then(function(data) {
  console.log(data);

  // Create a new choropleth layer
  geojson = L.choropleth(data, {

    // Define what  property in the features to use
    valueProperty: "After Prep",

    // Set color scale
    scale: ["65FFF6","#1B283A"],

    // Number of breaks in step range
    steps: 10,

    // q for quartile, e for equidistant, k for k-means
    mode: "q",
    style: {
      // Border color
      color: "#fff",
      weight: 1,
      fillOpacity: 0.8
    },

    // Binding a pop-up to each layer
    onEachFeature: function(feature, layer) {
      layer.bindPopup(feature.properties["State Name"] + "<br>" +
        + feature.properties["After Prep"]);
      // layer.on("mouseover", )
    }

  }).addTo(myMap);

  // Set up the legend
  var legend = L.control({ position: "bottomleft" });
  legend.onAdd = function() {
    var div = L.DomUtil.create("div", "info legend");
    var limits = geojson.options.limits;
    var colors = geojson.options.colors;
    var labels = [];

    // Add legend info, min & max
    var legendInfo = "<h4>Rate of Cases per 100,000 population</h4>" +
      "<div class=\"labels\">" +
        "<div class=\"min\">" + parseInt(limits[0]) + "</div>" + "<div class=\"max\">" + parseInt(limits[limits.length - 1]) +"</div>" + "</div>";
      "</div>";

    div.innerHTML = legendInfo;

    limits.forEach(function(limit, index) {
      labels.push("<li style=\"background-color: " + colors[index] + "\"></li>");
    });

    div.innerHTML += "<ul>" + labels.join("") + "</ul>";
    return div;
  };

  // Adding legend to the map
  legend.addTo(myMap);

});
};










//Selecting the dropdown 'value' choosen (document refers to HTML)
var before_or_after = document.getElementById("dropdown").value;

//Will select for the corect map info
//so if the before prep option is choosen we want to show the before choro
if (before_or_after == "Before PrEP") {
  var time = "Before Prep";
}
else if (before_or_after == "After PrEP") {
  var time = "After Prep";
}
else {
  var time = "Before Prep";
}

//Change the choropleth's when new selection is made
d3.select("#dropdown").onchange="updateChoro()";