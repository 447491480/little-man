//flot line chart
$(function () {
    var barOptions = {
        series: {
            lines: {
                show: true,
                lineWidth: 1,
                fill: true,
                fillColor: {
                    colors: [{
                            opacity: 0.5
                        }, {
                            opacity: 0.5
                        }]
                }
            }
        },
        xaxis: {
            tickDecimals: 0
        },
        colors: ["#36c6d3"],
        grid: {
            color: "#888888",
            hoverable: true,
            clickable: true,
            tickColor: "#eeeeee",
            borderWidth: 0
        },
        legend: {
            show: false
        },
        tooltip: true,
        tooltipOpts: {
            content: "x: %x, y: %y"
        } 
    };
    var barData = {
        label: "Visiters",
        data: [
            [1, 1000],
            [02, 1500],
            [03, 1400],
            [04, 1350],
            [05, 1920],
            [06, 2450],
            [07, 2148]
        ]
    };
    $.plot($("#flot-line-chart"), [barData], barOptions);

});

//world map


jQuery('#world-map-markers').vectorMap(
{
    map: 'world_mill_en',
    backgroundColor: '#fff',
    borderColor: '#818181',
    borderOpacity: 0.25,
    borderWidth: 1,
    color: '#f4f3f0',
    regionStyle : {
        initial : {
          fill : '#ddd'
        }
      },
    markerStyle: {
      initial: {
                    r: 9,
                    'fill': '#fff',
                    'fill-opacity':1,
                    'stroke': '#000',
                    'stroke-width' : 5,
                    'stroke-opacity': 0.4
                }
                },
    enableZoom: true,
    hoverColor: '#c9dfaf',
    markers : [{
        latLng : [21.00, 78.00],
        name : 'Marker title'
      
      }],
    hoverOpacity: null,
    normalizeFunction: 'linear',
    scaleColors: ['#b6d6ff', '#005ace'],
    selectedColor: '#c9dfaf',
    selectedRegions: [],
    showTooltip: true,
    onRegionClick: function(element, code, region)
    {
        var message = 'You clicked "'
            + region
            + '" which has the code: '
            + code.toUpperCase();

        alert(message);
    }
});

//analytic bar chart
 $(function () {
      var barData = {
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        datasets: [
            {
                label: "My First dataset",
                fillColor: "rgba(220,220,220,0.5)",
                strokeColor: "rgba(220,220,220,0.8)",
                highlightFill: "rgba(220,220,220,0.75)",
                highlightStroke: "rgba(220,220,220,1)",
                data: [65, 59, 80, 81, 56, 55, 40]
            },
            {
                label: "My Second dataset",
                fillColor: "rgba(54, 198, 211,0.5)",
                strokeColor: "rgba(54, 198, 211,0.8)",
                highlightFill: "rgba(54, 198, 211,0.75)",
                highlightStroke: "rgba(54, 198, 211,1)",
                data: [28, 48, 40, 19, 86, 27, 90]
            }
        ]
    };

    var barOptions = {
        scaleBeginAtZero: true,
        scaleShowGridLines: true,
        scaleGridLineColor: "rgba(0,0,0,.05)",
        scaleGridLineWidth: 1,
        barShowStroke: true,
        barStrokeWidth: 1,
        barValueSpacing: 5,
        barDatasetSpacing: 1,
        responsive: true
    };
       var ctx = document.getElementById("barChart").getContext("2d");
    var myNewChart = new Chart(ctx).Bar(barData, barOptions);
    });