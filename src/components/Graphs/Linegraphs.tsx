import React, { useEffect, useState } from 'react';

import * as echarts from 'echarts';
import EChartsReact from 'echarts-for-react';
import ReactEcharts from 'echarts-for-react';
import {BsFillBarChartFill} from 'react-icons/bs';


interface LinesgraphProps {
  salesdata: any[];
  profitdata: any[];
  onHoveredValueChange: (value: number | null) => void;
  onHoverNameChange:(value:any | null) =>void;
  
 
  
 
  // Define the type for your filtered data here
}



const LinesGraph = ({salesdata,profitdata,onHoveredValueChange,onHoverNameChange}: LinesgraphProps) => {
    
    const chartId = 'lineschart';
    // const [hoveredValue, setHoveredValue] = useState<number | null>(null);
    useEffect(() => {
      // const categories = Object.keys(monthlyEarnings)
      const chartElement = document.getElementById(chartId);
    
      
      if (chartElement) {
        // const data = [10, 50, 100, 150, 200, 250, 300, 350];
        const chart = echarts.init(chartElement);
        // const colors = [
        //   {
        //     x: 0,
        //     y: 0,
        //     x2: 0,
        //     y2: 1,
        //     colorStops: [
        //       {
        //         offset: 0,
        //         color: "#E323FF",
              
        //       },
        //       {
        //         offset: 1,
        //         color: "#7517F8",
               
        //       },
        //     ],
        //     global: false,
        //   },
        //   {
        //     x: 0,
        //     y: 0,
        //     x2: 0,
        //     y2: 1,
        //     colorStops: [
        //       {
        //         offset: 0,
        //         color: "#FFD422",
               
        //       },
        //       {
        //         offset: 1,
        //         color: "#FF7D05",
              
        //       },
        //     ],
        //     global: false,
        //   },
        // ];
       
        const option = {
 
            tooltip: {
                
                trigger: 'axis',
                formatter: (params: any) => {
                    if (params.length > 0) {
                      const dataIndex = params[0].dataIndex;
                      const salesValue = params[0].value;
                      const salesName = params[0].name;
                      const profitValue = params[1].value;
                      const profitName = params[1].name;
                      console.log(params);
        
                      if (params.seriesName == 'Profit') {
                        onHoveredValueChange(profitValue);
                        onHoverNameChange(profitName)
                      } else {
                        onHoveredValueChange(salesName);
                      }
        
                      return '';
                    }
                    return '';
                  },
                
              },
              legend: {
                show: false,
                data: ['Sales', 'Profit'],
              },
        grid: {
          top: '5%',
          bottom: '5%',
          left:'0',
        },
        xAxis: [
          {
            show: false,
            type: 'category',
          //   axisPointer: {
          //   value: "2016-10-7",
          //   snap: true,
          //   label: {
          //     show: true,
              
          //   },
          //   handle: {
          //     show: true
          //   }
          // },
            axisTick: {
              show: false,
              alignWithLabel: true,
            },
            axisLine: {
              onZero: false,
              lineStyle: {
                
              }
            },
           
            axisPointer: {
              label: {
                formatter: function (params:any) {
                  return (
                    'Precipitation  ' 
                    // params.value +
                    // (params.seriesData.length ?'' + params.seriesData[0].data : '')
                  );
                }
              }
            },
      
            // prettier-ignore
            data: salesdata
          },
          {
            type: 'category',
            show:false,
            axisTick: {
              show:false,
              alignWithLabel: true
            },
            axisLine: {
              show: false,
              onZero: false,
              lineStyle: {
                
               
              }
            },
           
            // prettier-ignore
            data:profitdata
          }
        ],
        yAxis: [
          {
            type: 'value',
            show: false,
            
          }
        ],
        series: [
          {
            name: 'sales',
            type: 'line',
            color:{
        type: 'linear',
        x: 1,
        y: 0,
        x2: 0,
        y2: 1,
        colorStops: [{
            offset: 0, color: '#E323FF' // color at 0%
        }, {
            offset: 1, color: '#7517F8' // color at 100%
        }],
        global: false // default is false
      },
             lineStyle: {
              width: 2, // Set the line width to 3
            },
           
            smooth: true,
            emphasis: {
              focus: 'series'
            },
            data: salesdata
          },

          
          {
            name: 'Profit',
            type: 'line',
             color:{
        type: 'linear',
        x: 1,
        y: 0,
        x2: 0,
        y2: 1,
        colorStops: [{
            offset: 0, color: '#FFD422' // color at 0%
        }, {
            offset: 1, color: '#FF7D05' // color at 100%
        }],
        global: false // default is false
      },
       lineStyle: {
              width: 2, // Set the line width to 3
            },
            smooth: true,
            emphasis: {
              focus: 'series'
            },
            data:profitdata
          }
        ]
      };
        const handleResize = () => {
          chart.resize();
        };

       



      //   chart.on('mouseover', (params: any) => {
      //     console.log(params)
      //     if (params.seriesType === 'line') {
              
      //         onHoveredValueChange(params.data); 
      //     }
      // });
      window.addEventListener('resize', handleResize);
        chart.setOption(option);
        return () => {
          chart.dispose();
        };
    
        
      }
  
      
  
    }, [salesdata,profitdata,chartId]);
    
   
  
    return (
      <div
        id={chartId}
        style={{ height: '100%',width:'100%' }}
      ></div>
    );
  };
  
  export default LinesGraph;