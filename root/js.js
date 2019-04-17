$(()=>{
  console.log('loaded');
  const ctx = document.getElementById('myChart').getContext('2d');
const chart = new Chart(ctx, {
  // The type of chart we want to create
  type: 'line',

  // The data for our dataset
  data: {
      labels: ['Mar 21', 'Mar 28', 'Apr 4'],
      datasets: [{
          label:'ETHEREUM TRANSACTION HISTORY IN 14 DAYS',
          fill:false,
          borderWidth:2,
          borderColor:'black',
        
          data: [400, 600, 800]
      }]
  },

  // Configuration options go here
  options: {
    scales:{
      yAxes:[
        {
          ticks:{
            min:400,
            max:800,
            stepSize:200
          },
          gridLines:{

               display:false,
               drawBorder:false
          }
        }
      ],
      xAxes:[{
        gridLines:{
          display:false,
          drawBorder:false
     }
      }

      ]
    },
    legend:{
      labels:{
        fontColor:'gray',
        fontSize:9
    
      }
      
    },
    elements:{
      point:{
        radius:0

      }

    }
  }
});
function dynamicUpdate()
{
  chart.data.datasets[0].data.push(100);
  chart.data.labels.push('Apr 11');
  chart.update();

}
//setInterval(dynamicUpdate,8000);
})
