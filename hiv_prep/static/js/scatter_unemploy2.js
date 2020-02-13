function init() {
  var url = "/unemployment";
  d3.json(url).then(function(data) {
    console.log(data);

    var unemp08 = data.map(d=>d['Unemployment_rate_2008-2012']);
    var cases08 = data.map(d=>d['New HIV Case Rate 2008-2012']);
    var name = data.map(d=>d['Name']);

    var trace1 = {
      x: unemp08,
      y: cases08,
      mode: 'markers',
      type: 'scatter',
      text: name,
      marker: { size: 12 }
    };

    var data = [trace1];

    var layout = {
      title:'2008-2012 HIV Case Rate vs. Unemployment Rate',
      xaxis: {
        range: [0, 12],
        title: "Unemployment Rate"
        },
      yaxis: {
        range: [0, 135],
        title: "HIV Case Rate"
      }
    };

    Plotly.newPlot('scatter3', data, layout);

  });
}

d3.selectAll("#selDataset2").on("change", updatePlotly);

// This function is called when a dropdown menu item is selected
function updatePlotly() {
  // Use D3 to select the dropdown menu
  var dropdownMenu = d3.select("#selDataset2");
  // Assign the value of the dropdown menu option to a variable
  var dataset = dropdownMenu.property("value");

  if (dataset === 'dataset21') {
    var un = "/unemployment";
    d3.json(un).then(function(data) {
      console.log(data);
  
      var x = data.map(d=>d['Unemployment_rate_2008-2012']);
      var y = data.map(d=>d['New HIV Case Rate 2008-2012']);

      var update = {
        title: '2008-2012 HIV Case Rate vs. Unemployment Rate'
      };
      
      Plotly.restyle("scatter3", "x", [x]);
      Plotly.restyle("scatter3", "y", [y]);
      Plotly.relayout("scatter3", update);
    });
  }

  if (dataset === 'dataset22') {
    var un = "/unemployment";
    d3.json(un).then(function(data) {
      console.log(data);
  
      var x = data.map(d=>d['Unemployment_rate_2013-2018']);
      var y = data.map(d=>d['New HIV Case Rate 2013-2018']);
      var update = {
        title: '2013-2018 HIV Case Rate vs. Unemployment Rate'
      };
      
      Plotly.restyle("scatter3", "x", [x]);
      Plotly.restyle("scatter3", "y", [y]);
      Plotly.relayout("scatter3", update);
    });
    // if (dataset === 'dataset23') {
    //   var un = "/unemployment";
    //   d3.json(un).then(function(data) {
    //     console.log(data);
    
    //     var x = data.map(d=>d['Unemployment_rate_variance']);
    //     var y = data.map(d=>d['']);
    //     var update = {
    //       title: '2013-2018 vs 2008-2012 Unemployment Rate Variance'
    //     };
        
    //     Plotly.restyle("scatter3", "x", [x]);
    //     Plotly.restyle("scatter3", "y", [y]);
    //     Plotly.relayout("scatter3", update);
    //   });
  }  


  // if (dataset === 'dataset2') {
  //   var un = "/unemployment";
  //   d3.json(un).then(function(data) {
  //     console.log(data);
  
  //     var x = data.map(d=>d['Unemployment_rate_2013-2018']);
  //     var y = data.map(d=>d['New HIV Case Rate 2013-2018']);
      
  //     Plotly.restyle("plot", "x", [x]);
  //     // Plotly.restyle("plot", "y", [y]);
  //   });
  // }
}

init();