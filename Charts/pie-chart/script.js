google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
    var data = google.visualization.arrayToDataTable([
        ['Universities', 'Ranks'],
        ['NSU', 11],
        ['IUB', 2],
        ['AIUB', 2],
        ['BRACU', 2],
        ['UIU', 7]
    ]);
    
    var options = {
        title: "University Ranking",
        pieSliceText: 'label',  //comment this line for show percentage inside pie
    };
    
    var chart = new google.visualization.PieChart(document.getElementById('piechart'));
    chart.draw(data, options);}