function init() {
  var url = "/income";
  d3.json(url).then(function(data) {
    console.log(data);

    var annual_pay08 = data.map(d=>d['Annual_Avg_Pay_2008-2012']);
    var cases08 = data.map(d=>d['New HIV Case Rate 2008-2012']);
    var name = data.map(d=>d['Name']);

    var trace1 = {
      x: annual_pay08,
      y: cases08,
      mode: 'markers',
      type: 'scatter',
      text: name,
      marker: { size: 12 }
    };

    var data = [trace1];

    var layout = {
      title:'2008-2012 HIV Case Rate vs. Average Annual Income',
      xaxis: {
        range: [30000, 90000],
        title: "Annual Average Income"
        },
      yaxis: {
        range: [0, 135],
        title: "HIV Case Rate"
      }
    };

    Plotly.newPlot('scatter2', data, layout);

  });
}

d3.selectAll("#selDataset").on("change", updatePlotly);

// This function is called when a dropdown menu item is selected
function updatePlotly() {
  // Use D3 to select the dropdown menu
  var dropdownMenu = d3.select("#selDataset");
  // Assign the value of the dropdown menu option to a variable
  var dataset = dropdownMenu.property("value");

  if (dataset === 'dataset1') {
    var un = "/income";
    d3.json(un).then(function(data) {
      console.log(data);
  
      var x = data.map(d=>d['Annual_Avg_Pay_2008-2012']);
      var y = data.map(d=>d['New HIV Case Rate 2008-2012']);

      var update = {
        title: '2008-2012 HIV Case Rate vs. Average Annual Income'
      };
      
      Plotly.restyle("scatter2", "x", [x]);
      Plotly.restyle("scatter2", "y", [y]);
      Plotly.relayout("scatter2", update);
    });
  }

  if (dataset === 'dataset2') {
    var un = "/income";
    d3.json(un).then(function(data) {
      console.log(data);
  
      var x = data.map(d=>d['Annual_Avg_Pay_2013-2018']);
      var y = data.map(d=>d['New HIV Case Rate 2013-2018']);
      var update = {
        title: '2013-2018 HIV Case Rate vs. Average Annual Income'
      };
      
      Plotly.restyle("scatter2", "x", [x]);
      Plotly.restyle("scatter2", "y", [y]);
      Plotly.relayout("scatter2", update);
    });
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