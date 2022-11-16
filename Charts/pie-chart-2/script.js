var canvasElement = document.getElementById("pie-chart");
var chartTitle = "University Ratings";
var labelsData = ["NSU", "IUB", "BRACU", "AIUB", "UIU"]; //Column names of a bar-chart
var inputData = [12, 5, 18, 8, 7]; //column height of a bar-chart
var labelTitle = "Number of positive ranking"; //name of the data of a bar-chart

var background = [              // manual bar colors 
    "rgba(255, 159, 64, 1)",
    "rgba(255, 99, 132, 1)",
    "rgba(54, 162, 235, 1)",
    "rgba(75, 255, 192, 1)",
    "rgba(153, 102, 255, 1)"
];

var config = {
    type: "pie",
    data: {
        labels: labelsData,
        datasets: [{
            label: labelTitle,   // comment this line to label title
            data: inputData,
            backgroundColor: background,
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

var barChart = new Chart(canvasElement, config);