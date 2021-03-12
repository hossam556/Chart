import React from 'react'
import './Chart.css'
import {Bar  ,Chart , global} from 'react-chartjs-2'

class Charts extends React.Component{
    constructor(props){
      super(props);
      this.state = {
        chartData:{
            labels: [1,2 ,3,4,5,6,7,8,9,10,11,12],
            datasets:[
              {
                label:'Checkouts',
                data:[
                  250,
                  125,
                  175,
                  75,
                  275,
                  175,
                  135,
                  185,
                  130,
                  150,
                  190,
                  140
                ],
                backgroundColor:'#27DAE1',
                barThickness: 6,
               

              },
              {
                label:'Checkouts',
                data:[
                  150,
                  125,
                  175,
                  75,
                  275,
                  175,
                  135,
                  185,
                  130,
                  150,
                  190,
                  140
                ],
                backgroundColor:'#FF3D96',
                barThickness: 6,
               

              }
            ]
          }
        };
      }
          

  
  
    render(){
        Chart.defaults.global.defaultFontColor = "white";
        Chart.defaults.global.defaultFontSize = 14;


      return (
        <div className="chart">
          <Bar
            data={this.state.chartData}
             options={{
               legend:{
                display:false,
               
              },
              tooltips: {
                callbacks: {
                    labelColor: function(tooltipItem, chart) {
                        return {
                            borderColor: '#FF3D96',
                            backgroundColor: '#FF3D96'
                        };
                    },
                    labelTextColor: function(tooltipItem, chart) {
                        return 'white';
                    }
                },
                
                backgroundColor:'#2a273d',
                xPadding: 15,
                yPadding: 25,
                caretPadding :10,
                cornerRadius:15,
            }
            //   layout: {
            //     padding: {
            //         left: 50,
            //         right: 0,
            //         top: 0,
            //         bottom: 0
            //     }
            // }
             }}
          />
  
          
        </div>
      )
    }
  }
  
  export default Charts;