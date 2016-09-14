// Dashboard 1 Morris-chart

Morris.Area({
        element: 'morris-area-chart2',
        data: [{
            period: '2010',
            SiteA: 0,
            SiteB: 0,

        }, {
            period: '2011',
            SiteA: 130,
            SiteB: 100,

        }, {
            period: '2012',
            SiteA: 80,
            SiteB: 60,

        }, {
            period: '2013',
            SiteA: 70,
            SiteB: 200,

        }, {
            period: '2014',
            SiteA: 180,
            SiteB: 150,

        }, {
            period: '2015',
            SiteA: 105,
            SiteB: 90,

        },
         {
            period: '2016',
            SiteA: 250,
            SiteB: 150,

        }],
        xkey: 'period',
        ykeys: ['SiteA', 'SiteB'],
        labels: ['Site A', 'Site B'],
        pointSize: 0,
        fillOpacity: 0.4,
        pointStrokeColors:['#b4becb', '#01c0c8'],
        behaveLikeLine: true,
        gridLineColor: '#e0e0e0',
        lineWidth: 0,
        smooth: false,
        hideHover: 'auto',
        lineColors: ['#b4becb', '#01c0c8'],
        resize: true

    });
	// Morris bar chart
    Morris.Bar({
        element: 'morris-bar-chart',
        data: [{
            y: 'PMI Score',
            a: 100,
            b: 90,
            c: 60
        }, {
            y: 'Schedule Variance',
            a: 75,
            b: 65,
            c: 40
        }, {
            y: 'Effort Variance',
            a: 50,
            b: 40,
            c: 30
        }, {
            y: 'App Quality',
            a: 75,
            b: 65,
            c: 40
        }, {
            y: 'Engg Quality',
            a: 50,
            b: 40,
            c: 30
        }, {
            y: 'Utilisation',
            a: 75,
            b: 65,
            c: 40
        }, {
            y: 'Customer satisfaction Index',
            a: 100,
            b: 90,
            c: 40
        }],
        xkey: 'y',
        ykeys: ['a', 'b', 'c'],
        labels: ['May', 'June', 'July'],
        barColors:['#b8edf0', '#b4c1d7', '#fcc9ba'],
        hideHover: 'auto',
        gridLineColor: '#eef0f2',
        resize: true
    });
	Morris.Donut({
        element: 'morris-donut-chart',
        data: [{
            label: "May",
            value: 12,

        }, {
            label: "June",
            value: 30
        }, {
            label: "July",
            value: 20
        }],
        resize: true,
        colors:['#CFCFCF', '#C22F00', '#E5C500']
    });

		Morris.Donut({
        element: 'morris-donut-chart1',
        data: [{
            label: "May",
            value: 12,

        }, {
            label: "June",
            value: 30
        }, {
            label: "July",
            value: 20
        }],
        resize: true,
        colors:['#DFDFDF', '#241E20', '#42BA7D']
    });

		Morris.Donut({
        element: 'morris-donut-chart2',
        data: [{
            label: "May",
            value: 12,

        }, {
            label: "June",
            value: 30
        }, {
            label: "July",
            value: 20
        }],
        resize: true,
        colors:['#46BFBD', '#F7464A', '#4D5360']
    });

		Morris.Donut({
        element: 'morris-donut-chart3',
        data: [{
            label: "May",
            value: 12,

        }, {
            label: "June",
            value: 30
        }, {
            label: "July",
            value: 20
        }],
        resize: true,
        colors:['#8245BB', '#24B806', '#3491c1']
    });

		Morris.Donut({
        element: 'morris-donut-chart4',
        data:[{
            label: "May",
            value: 12,

        }, {
            label: "June",
            value: 30
        }, {
            label: "July",
            value: 20
        }],
        resize: true,
        colors:['#C00000', '#CDCDCD', '#4F81BD']
    });

		Morris.Donut({
        element: 'morris-donut-chart5',
        data: [{
            label: "May",
            value: 12,

        }, {
            label: "June",
            value: 30
        }, {
            label: "July",
            value: 20
        }],
        resize: true,
        colors:['#C9C904', '#6A8F2E', '#99CA15']
    });

		Morris.Donut({
        element: 'morris-donut-chart6',
        data: [{
            label: "May",
            value: 12,

        }, {
            label: "June",
            value: 30
        }, {
            label: "July",
            value: 20
        }],
        resize: true,
        colors:['#99d683', '#13dafe', '#6164c1']
    });

		Morris.Donut({
        element: 'morris-donut-chart7',
        data: [{
            label: "May",
            value: 12,

        }, {
            label: "June",
            value: 30
        }, {
            label: "July",
            value: 20
        }],
        resize: true,
        colors:['#99d683', '#13dafe', '#6164c1']
    });

/*
Morris.Area({
        element: 'morris-area-chart2',
        data: [{
            period: '2010',
            SiteA: 0,
            SiteB: 0,

        }, {
            period: '2011',
            SiteA: 130,
            SiteB: 100,

        }, {
            period: '2012',
            SiteA: 80,
            SiteB: 60,

        }, {
            period: '2013',
            SiteA: 70,
            SiteB: 200,

        }, {
            period: '2014',
            SiteA: 180,
            SiteB: 150,

        }, {
            period: '2015',
            SiteA: 105,
            SiteB: 90,

        },
         {
            period: '2016',
            SiteA: 250,
            SiteB: 150,

        }],
        xkey: 'period',
        ykeys: ['SiteA', 'SiteB'],
        labels: ['Site A', 'Site B'],
        pointSize: 0,
        fillOpacity: 0.4,
        pointStrokeColors:['#b4becb', '#01c0c8'],
        behaveLikeLine: true,
        gridLineColor: '#e0e0e0',
        lineWidth: 0,
        smooth: false,
        hideHover: 'auto',
        lineColors: ['#b4becb', '#01c0c8'],
        resize: true

    });


// LINE CHART
        var line = new Morris.Line({
          element: 'morris-line-chart',
          resize: true,
          data: [
            {y: '2011 Q1', item1: 2666},
            {y: '2011 Q2', item1: 2778},
            {y: '2011 Q3', item1: 4912},
            {y: '2011 Q4', item1: 3767},
            {y: '2012 Q1', item1: 6810},
            {y: '2012 Q2', item1: 5670},
            {y: '2012 Q3', item1: 4820},
            {y: '2012 Q4', item1: 15073},
            {y: '2013 Q1', item1: 10687},
            {y: '2013 Q2', item1: 8432}
          ],
          xkey: 'y',
          ykeys: ['item1'],
          labels: ['Item 1'],
          gridLineColor: '#eef0f2',
          lineColors: ['#a3a4a9'],
          lineWidth: 1,
          hideHover: 'auto'
        });
 // Morris donut chart

    Morris.Donut({
        element: 'morris-donut-chart',
        data: [{
            label: "Download Sales",
            value: 12,

        }, {
            label: "In-Store Sales",
            value: 30
        }, {
            label: "Mail-Order Sales",
            value: 20
        }],
        resize: true,
        colors:['#99d683', '#13dafe', '#6164c1']
    });


// Extra chart
 Morris.Area({
        element: 'extra-area-chart',
        data: [{
                    period: '2010',
                    iphone: 0,
                    ipad: 0,
                    itouch: 0
                }, {
                    period: '2011',
                    iphone: 50,
                    ipad: 15,
                    itouch: 5
                }, {
                    period: '2012',
                    iphone: 20,
                    ipad: 50,
                    itouch: 65
                }, {
                    period: '2013',
                    iphone: 60,
                    ipad: 12,
                    itouch: 7
                }, {
                    period: '2014',
                    iphone: 30,
                    ipad: 20,
                    itouch: 120
                }, {
                    period: '2015',
                    iphone: 25,
                    ipad: 80,
                    itouch: 40
                }, {
                    period: '2016',
                    iphone: 10,
                    ipad: 10,
                    itouch: 10
                }


                ],
                lineColors: ['#fb9678', '#01c0c8', '#8698b7'],
                xkey: 'period',
                ykeys: ['iphone', 'ipad', 'itouch'],
                labels: ['Site A', 'Site B', 'Site C'],
                pointSize: 0,
                lineWidth: 0,
                resize:true,
                fillOpacity: 0.8,
                behaveLikeLine: true,
                gridLineColor: '#e0e0e0',
                hideHover: 'auto'

    });
	*/
	//sparkline charts
$(document).ready(function() {
   var sparklineLogin = function() {


        $("#sparkline8").sparkline([2,4,4,6,8,5,6,4,8,6,6,2 ], {
            type: 'line',
            width: '100%',
            height: '50',
            lineColor: '#fb9678',
            fillColor: '#fb9678',
            maxSpotColor: '#fb9678',
            highlightLineColor: 'rgba(0, 0, 0, 0.2)',
            highlightSpotColor: '#fb9678'
        });
        $("#sparkline9").sparkline([0,2,8,6,8,5,6,4,8,6,6,2 ], {
            type: 'line',
            width: '100%',
            height: '50',
            lineColor: '#01c0c8',
            fillColor: '#01c0c8',
            minSpotColor:'#01c0c8',
            maxSpotColor: '#01c0c8',
            highlightLineColor: 'rgba(0, 0, 0, 0.2)',
            highlightSpotColor: '#01c0c8'
        });
        $("#sparkline10").sparkline([2,4,4,6,8,5,6,4,8,6,6,2], {
            type: 'line',
            width: '100%',
            height: '50',
            lineColor: '#ab8ce4',
            fillColor: '#ab8ce4',
            maxSpotColor: '#ab8ce4',
            highlightLineColor: 'rgba(0, 0, 0, 0.2)',
            highlightSpotColor: '#ab8ce4'
        });
   }
    var sparkResize;

        $(window).resize(function(e) {
            clearTimeout(sparkResize);
            sparkResize = setTimeout(sparklineLogin, 500);
        });
        sparklineLogin();

});
