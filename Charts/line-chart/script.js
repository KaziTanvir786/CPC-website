var canvasElement = document.getElementById("line-chart");
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
    type: "line",
    data: {
        labels: labelsData,
        datasets: [{
            label: labelTitle,
            data: inputData,
            // backgroundColor: background,
            borderColor: 'rgb(75, 192, 192)',
            pointBorderColor: background,
            pointBackgroundColor: background,
            pointRadius: 6,
            pointHoverRadius: 10,
            tension: 0.3
        }]
    },
    options: {
        plugins: {
            title: {
                display: true,
                text: chartTitle
            },
            legend: false
        }
    }
}

var barChart = new Chart(canvasElement, config);