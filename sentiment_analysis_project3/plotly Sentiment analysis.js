var trace1 = {
  y: [0.0,
    0.0,
    1.0,
    0.23846153846153847,
    0.5,
    0.0,
    0.5,
    0.5,
    0.75,
    0.0,
    0.7888888888888889,
    0.3939393939393939,
    0.5,
    0.3],

  x:[0.0,
    0.0,
    -0.25,
    0.0,
    0.0,
    0.0,
    0.0,
    0.0,
    -0.33333333333333337,
    0.0,
    -0.5666666666666667,
    0.1515151515151515,
    0.15625,
    -0.2],

  mode: 'markers',
  type: 'scatter',
  name: 'Polarity vs Subjectivity',
  textposition: 'top center',
  textfont: {
    family:  'Raleway, sans-serif'
  },
  text: ['@frankvombaum @NiemieckaPolity Und in China wurden auch HIV Medikamente wie eine Alternative zu Truvada eingesetzt', 'Transition update: went to doctor this week and she doubled my E patches. I started Truvada as well. Laser hair rem… https://t.co/q8CLDCpFta', '@mdcfBBA @SenJeffMerkley @BooConley @BillGates Besides the fact that this is a fake pandemic, which exists only to… https://t.co/TY3rcLmVtT', '@SenJeffMerkley @BooConley Wash hand regularly Checking virus kits unavailable currently attempting to obtain may… https://t.co/AGkKz5a4qg' 
 , 'A-RT @mdcfBBA: @MichelleKalehz1 @EnseySherwood Get well Test self Will take time for recovery 4 weeks Rest Soup Antivirals such as Odef…', '@hotelcamaguey Aquí les están metiendo tremenda demanda a los  laboratorios que hicieron Truvada porque parece que… https://t.co/eNK50zcd5q','RT @mdcfBBA: @MichelleKalehz1 @EnseySherwood Get well Test self Will take time for recovery 4 weeks Rest Soup Antivirals such as Odef…','RT @mdcfBBA: @MichelleKalehz1 @EnseySherwood Get well Test self Will take time for recovery 4 weeks Rest Soup Antivirals such as Odef…','RT @_basant2: Imagine a severe strain of Coronavirus quickly kills everyone, except for gays on Truvada. What a terrifying world to survive…','@camilo_hdezd Para no usar condón está la Truvada, pero para el coronavirus nada','@catturd2 The ads are so annoying. They are bad as the relentless Truvada ads. Nobody gives a shit.','@xtrixcyclex We’ve also got to recognize that PhRMA is not the main source of R&amp;D for new drugs - I t’s our public… https://t.co/gSMbdzL09P','@OnADiamondDiet @TheLolaEnigma @DateNaomiChoi Unfortunately, most GYNs have little to no experience with HIV or Tru… https://t.co/kHBMzTG6C1','I am the biggest waste of Truvada. I take it everyday just so I can practice abstinence'],
  marker: { size: 12 }
};

var data = [ trace1];

var layout = {
  xaxis: {
    title: 'Tweet Polarity',
    range: [-1.1, 1.1 ]
  },
  yaxis: {
    title: 'Tweet Subjectivity',
    range: [-0.1, 1.1]
  },
  legend: {
    y: 0.5,
    yref: 'paper',
    font: {
      family: 'Arial, sans-serif',
      size: 20,
      color: 'red',
    }
  },
  title:'Tweet Polarity vs Subjectivity'
};

Plotly.newPlot('plot', data, layout);