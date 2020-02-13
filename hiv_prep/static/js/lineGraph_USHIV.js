var trace1 = {
    x: ["2008", "2009", "2010", "2011",
        "2012", "2013", "2014", "2015", "2016", "2017", "2018"],
    y: [47290,	44751,	43067,	41311,	40529,	39230,	39963,	39796,	39520,	38226,	37286],
    type: "line"
  };
  
  var data = [trace1];
  
  var layout = {
    title: "Number of HIV Cases in USA (2008-2018)",
    xaxis: {
      title: 'Years'
    },
    yaxis: {
      title: 'Number of HIV Cases'
    }
  };
  
  Plotly.newPlot("plot", data, layout);
 