window.onload = function () {

    var dps = [{x: new Date(2012,2,21), y: 10}, {x: new Date(2012,2,28), y: 20}];   //dataPoints. 

    var chart = new CanvasJS.Chart("chartContainer",{
      theme:'light2',
      animationEnabled:true,

        title :{
            text: "ETHEREUM TRANSACTION HISTORY IN 14 DAYS"
        },
        axisX: {
          gridThickness: 0,
        tickLength: 0,
        lineThickness: 0,
        labelAngle: 180,
        interval: 7,
        intervalType: "day",
        minimum:new Date(2012,2,21),
        maximum:new Date(2012,3,4),
        
                                 
            title: "",
            labelFormatter: function (e) {
				return CanvasJS.formatDate( e.value, "DD MMM");
			}
        },
        axisY: {
          gridThickness: 0,
       tickLength: 0,
        lineThickness: 0,
                           
            title: ""
        },
        data: [{
            type: "spline",
            lineColor:'black',
            markerType: "none",
            lineThickness: 0,
            dataPoints : dps
        }]
    });

    chart.render();
    var xVal = dps.length + 1;
    var yVal = 15;	
    var updateInterval = 10000;

    var updateChart = function () {
        
        
        yVal = yVal +  Math.round(5 + Math.random() *(-5-5));
        dps.push({x: xVal,y: yVal});
        
        xVal++;
        if (dps.length >  10 )
        {
            dps.shift();				
        }

        chart.render();		

  // update chart after specified time. 

}

//setInterval(function(){updateChart()}, updateInterval); 
}