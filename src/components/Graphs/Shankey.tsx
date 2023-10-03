import React, { useEffect, useState } from 'react';

import * as echarts from 'echarts';
import EChartsReact from 'echarts-for-react';
import ReactEcharts from 'echarts-for-react';


interface ShankeygraphProps {
  data: any[];
  
 
  
 
  // Define the type for your filtered data here
}



const ShankeyGraph = ({data}: ShankeygraphProps) => {
    const [nodeWidth, setNodeWidth] = useState(80);
  
    const chartId = 'my-chart';
    // const [hoveredValue, setHoveredValue] = useState<number | null>(null);
    useEffect(() => {
      // const categories = Object.keys(monthlyEarnings)
      const chartElement = document.getElementById(chartId);
    
      
      if (chartElement && data.length > 0) {
        // const data = [10, 50, 100, 150, 200, 250, 300, 350];
        const chart = echarts.init(chartElement);
        const calculateNodeWidth = () => {
            // Calculate the desired node width based on the screen width
            const screenWidth = window.innerWidth;
            let desiredNodeWidth;
    
            // You can define your own logic here to calculate nodeWidth
            // For example, you can make it responsive to screen size.
            if (screenWidth >= 1100) {
              desiredNodeWidth = 150;
            } else if (screenWidth >= 768) {
              desiredNodeWidth = 110;
            } else if(screenWidth >= 500) {
              desiredNodeWidth = 100;
            }else{
                desiredNodeWidth =80;
            }
    
            setNodeWidth(desiredNodeWidth);
          };

          calculateNodeWidth(); // Calculate initial nodeWidth

          const handleResize = () => {
            calculateNodeWidth(); // Recalculate nodeWidth on window resize
            chart.resize();
          };
    
          window.addEventListener('resize', handleResize);

          
       
  
        const option = {
            series: {
              type: 'sankey',
             top:'5%',
              left:'5%',
              z:'10',
              nodeGap:50,
              layout: 'none',
              
              emphasis: {
                focus: 'none'
              },
              data:data,
               levels: [
                      {
                        depth: 0,
                        itemStyle: {
                          color: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 1,
            y2: 0,
            colorStops: [{
                offset: 0, color: '#1586FF' // color at 0%
            }, {
                offset: 1, color: '#36BAF4' // color at 100%
            }],
            global: false // default is false
          },
          opacity:1,
                        borderColor: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 1,
            y2: 0,
            colorStops: [{
                offset: 0, color: '#1586FF' // color at 0%
            }, {
                offset: 1, color: '#36BAF4' // color at 100%
            }],
            global: false // default is false
          },
                    borderWidth:25,
                    borderCap:'round',
                    borderJoin:'round', 
                        },
                        lineStyle: {
                          color: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 1,
            y2: 0,
            colorStops: [{
                offset: 0, color: '#36B7F4' // color at 0%
            }, {
                offset: 0.2, color: '#36B7F4' // color at 100%
            },
            {
                offset: 0.8, color: '#E94578' // color at 100%
            }
            
            ],
            global: false // default is false
          },
                          
                          opacity: 0.6,
                          
                          curveness: 0.5 ,
                          
                        }
                      },
                      {
                        depth: 1,
                        itemStyle: {
                         color: {
            type: 'linear',
            x: 0,
            y: 1,
            x2: 1,
            y2: 1,
            colorStops: [{
                offset: 0, color: '#EB5D77' // color at 0%
            }, 
            
           
            
            ],
            global: false // default is false
          },
          opacity:1,
          borderColor:  '#EB5D77',
          
            
          
          
          
                    borderWidth:25,
                    borderCap:'round',
                    borderJoin:'round',
                        },
                        lineStyle: {
                          color: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 1,
            y2: 0,
            colorStops: [{
                offset: 0, color: '#E94578' // color at 0%
            },
            {
                offset: 0.3, color: '#E94578' // color at 0%
            },
            
            {
                offset: 0.6, color: '#7A4BD8' // color at 100%
            },
            
            {
                offset: 1, color: '#7A4BD8' // color at 100%
            }
            
            ],
            global: false // default is false
          },
          
          curveness: 0.5 ,
                          opacity: 0.6
                        }
                      },
                      {
                        depth: 2,
                        itemStyle: {
                         color: {
            type: 'linear',
            x: 0,
            y: 0.5,
            x2: 0.5,
            y2: 1,
            colorStops: [{
                offset: 0, color: '#7A4BD8' // color at 0%
            }, 
            {
                offset: 1, color: '#5226FF' // color at 100%
            }
            
            ],
            global: false // default is false
          },
          opacity:1,
          borderColor:  {
            type: 'linear',
             x: 0,
            y: 0.5,
            x2: 0.5,
            y2: 1,
            colorStops: [{
                offset: 0, color: '#7A4BD8' // color at 0%
            }, 
            {
                offset: 1, color: '#5226FF' // color at 100%
            }
            
            ],
            global: false // default is false
          },
          
            
          
          
          
                    borderWidth:25,
                    
                    borderJoin:'round',
                        },
                        lineStyle: {
                          color: 'source',
                          opacity: 0.6,
                          
          
                        }
                      },
                   
                    ],
                   
              links: [
                {
                  source: data[0].name,
                  target: data[1].name,
                  value: (data[0].value + data[1].value)/4,
                },
                {
                  source: data[0].name,
                  target: data[2].name,
                  value: (data[0].value + data[2].value)/4,
                },
                {
                  source: data[0].name,
                  target: data[3].name,
                  value: (data[0].value + data[3].value)/4,
                },
                {
                  source: data[1].name,
                  target: data[4].name,
                  value: (data[1].value + data[4].value)/4,
                },
                 {
                  source: data[1].name,
                  target: data[5].name,
                  value: (data[1].value + data[5].value)/4,
                },
                {
                  source: data[2].name,
                  target: data[6].name,
                  value: (data[2].value + data[6].value)/4,
                },
                 {
                  source: data[3].name,
                  target: data[5].name,
                  value: (data[3].value + data[5].value)/4,
                },
                 
                {
                  source: data[2].name,
                  target: data[4].name,
                  value: (data[2].value + data[4].value)/4,
                },
                 {
                  source: data[3].name,
                  target: data[6].name,
                  value: (data[3].value + data[6].value)/4,
                },
               
                
                
                
          
                
              ],
              nodeWidth: nodeWidth,
              height:'70%',
              width:'90%',
              
              label: {
                fontSize:12,
            fontFamily:'sans-serif',
            fontWeight:'lighter',
            color:'#fff',
                position: "inside",
                formatter: (params: any) => {
                    // Display the name and value inside the label
                    return params.name+'\n'+ '\n'+'$'+ Math.round(((params.value)/1000)*100)/100 +'k';
                  },
               
               
              },
              
              
          
            }
          };
       
      //   chart.on('mouseover', (params: any) => {
      //     console.log(params)
      //     if (params.seriesType === 'line') {
              
      //         onHoveredValueChange(params.data); 
      //     }
      // });

      chart.setOption(option);

      window.addEventListener('resize', handleResize);
        chart.setOption(option);
        return () => {
          chart.dispose();
        };
    
        
      }
  
      
  
    }, [data,chartId,nodeWidth]);
  
  
    return (
      <div
        id={chartId}
        style={{ height: '100%',width:'100%' }}
      ></div>
    );
  };
  
  export default ShankeyGraph;