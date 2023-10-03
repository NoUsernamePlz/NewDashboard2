import React, { useEffect, useState } from 'react';

import * as echarts from 'echarts';
import EChartsReact from 'echarts-for-react';
import ReactEcharts from 'echarts-for-react';
import {BsFillBarChartFill} from 'react-icons/bs';


interface DonutgraphProps {
  data: any[];
  onHoverLabelData: (name: string, value: string) => void;

 
  
 
  // Define the type for your filtered data here
}



const DonutGraph = ({data,onHoverLabelData}: DonutgraphProps) => {
    
    const chartId = 'donutchart';
    
    // const [hoveredValue, setHoveredValue] = useState<number | null>(null);
    useEffect(() => {
      
      const chartElement = document.getElementById(chartId);
    
      
      if (chartElement && data.length > 0) {

        const chart = echarts.init(chartElement);
        console.log(data);
       
     
       
        const option = {
            tooltip: {
              trigger: 'item',
              formatter: function (params:any) {
                // Store the name and value in variables
                const name = params.name;
                const value = params.value;
                onHoverLabelData(name,value);
          
                // Format the tooltip text
                return '';
              },

              show:true,
            },
            legend: {
              show:false,
              top: '5%',
              left: 'center'
            },
            series: [
              {
                
               
          
           
                name: 'Access From',
                type: 'pie',
                radius: ['50%', '100%'],
                avoidLabelOverlap: false,
                itemStyle: {
                  borderRadius: 40,
                  borderColor: '#191932',
                  borderWidth: 10,
                  
                  
                },
                label: {
                  show: false,
                  position: 'center'
                },
                emphasis: {
                  label: {
                    show: true,
                   
                    //  formatter:'{b}' + '\n\n'  +'{c}',
                    formatter: (params:any) => {
                      const label = `${params.name}`;
                      
           
                      return label;
                    },
                    fontSize: 10,
                    fontFamily:'sans-serif',
            fontWeight:'lighter',
            color:'#fff',
                  }
                },
                labelLine: {
                  show: false
                },
                data: [
                  { value: data[0].averageSale, name: data[0].subcategory,
                    itemStyle:{
                      color:{
            type: 'linear',
            x: 0,
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
                    }
                  },
                  
                  { value: data[1].averageSale, name: data[1].subcategory,itemStyle:{
                      color:{
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [{
                offset: 0, color: '#3BDE5C' // color at 0%
            }, {
                offset: 1, color: '#02C751' // color at 100%
            }],
            global: false // default is false
          }, }},
                  { value: data[2].averageSale, name: data[2].subcategory,
                  
                    itemStyle:{
                      color:{
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [{
                offset: 0, color: '#FFD422' // color at 0%
            }, {
                offset: 1, color: '#FF7D05' // color at 100%
            }],
            global: false // default is false
          }, }
                  },
                  
                ]
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
  
      
  
    }, [data,chartId]);
   
  
    return (
      <div
        id={chartId}
        style={{ height: '100%',width:'100%' }}
      ></div>
    );
  };
  
  export default DonutGraph;