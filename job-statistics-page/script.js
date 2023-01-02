var canvasElement1 = document.getElementById("pie-chart-1");
var canvasElement2 = document.getElementById("pie-chart-2");

// for data-field-1
var chartTitle1 = "Job Statistics";
var labelsData1 = ["Corporate",	"CPC"]; //Column names of a bar-chart
var inputData1 = [256, 412]; //column height of a bar-chart
var labelTitle1 = "Number of positive ranking"; //name of the data of a bar-chart

// 5202, 3498, 467, 229
// "SBE",	"SEPS", "SHLS", "SHSS"

var background1 = [              // manual bar colors 
    "rgba(255, 159, 64, 1)",
    "rgba(255, 99, 132, 1)",
    "rgba(54, 162, 235, 1)",
    "rgba(75, 255, 192, 1)",
    "rgba(153, 102, 255, 1)"
];

var config1 = {
    type: "pie",
    data: {
        labels: labelsData1,
        datasets: [{
            label: labelTitle1,   // comment this line to label title
            data: inputData1,
            backgroundColor: background1,
            borderColor: "#fff"
        }]
    },
    options: {
        plugins: {
            datalabels: {
              formatter: (value, ctx) => {
                let datasets = ctx.chart.data.datasets;
                if (datasets.indexOf(ctx.dataset) === datasets.length - 1) {
                  let sum = datasets[0].data.reduce((a, b) => a + b, 0);
                  let percentage = Math.round((value / sum) * 100) + '%';
                  return percentage;
                } else {
                  return percentage;
                }
              },
              color: '#fff',
            }
          }
    }
}


// for dtaa-field-2
var chartTitle2 = "Internship Statistics";
var labelsData2 = ["Corporate",	"CPC"]; //Column names of a bar-chart
var inputData2 = [145, 235]; //column height of a bar-chart
var labelTitle2 = "Number of positive ranking"; //name of the data of a bar-chart

// 5202, 3498, 467, 229
// "SBE",	"SEPS", "SHLS", "SHSS"

var background2 = [              // manual bar colors 
    "rgba(25, 1, 90, 1)",
    "rgba(55, 99, 45, 1)",
    "rgba(15, 155, 135, 22)",
    "rgba(1, 125, 1, 1)",
    "rgba(153, 102, 255, 1)"
];

var config2 = {
    type: "pie",
    data: {
        labels: labelsData2,
        datasets: [{
            label: labelTitle2,   // comment this line to label title
            data: inputData2,
            backgroundColor: background2,
            borderColor: "#fff"
        }]
    },
    options: {
        plugins: {
            datalabels: {
              formatter: (value, ctx) => {
                let datasets = ctx.chart.data.datasets;
                if (datasets.indexOf(ctx.dataset) === datasets.length - 1) {
                  let sum = datasets[0].data.reduce((a, b) => a + b, 0);
                  let percentage = Math.round((value / sum) * 100) + '%';
                  return percentage;
                } else {
                  return percentage;
                }
              },
              color: '#fff',
            }
          }
    }
}

var barChart = new Chart(canvasElement1, config1);
var barChart = new Chart(canvasElement2, config2);