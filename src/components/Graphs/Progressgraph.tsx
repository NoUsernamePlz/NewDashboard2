
import React, { useEffect, useState } from 'react';

import * as echarts from 'echarts';
import EChartsReact from 'echarts-for-react';
import ReactEcharts from 'echarts-for-react';


interface ProgressgraphProps {
  data: any[];
  index:any[];

  color: string;
  
 
}





const ProgressGraph = ({data,index,color}: ProgressgraphProps) => {
  
  const chartId = `myProgressChart-${index}`;
  
  useEffect(() => {
  
    const chartElement = document.getElementById(chartId);
  
    
    if (chartElement && data.length>0) {
   
      const chart = echarts.init(chartElement);
      console.log(data[0]);
      console.log(color);
      
      
    
     const colors =[color]
     const option = {
      color:colors,
      tooltip: {
        show: false
      },
      xAxis: {
        type: 'value',
        show: false,
        min: 0,
        max:  Math.max(...data)

      },
      yAxis: {
        show:false,
        type: 'category',
        data: ['Progress'],
        axisTick: {
          show: false
        }
      },
      series: [
        {
          name: 'Background',
          type: 'bar',
          barWidth: 5,
          label: {
            show: false
          },
          itemStyle: {
            color: '#000000', // Gray background color
            barBorderRadius: [10, 10, 10, 10]
          },
          data: [Math.max(...data)
          ] // Set the data to maxProgressValue for both bars
        },
        {
          name: 'Progress 1',
          type: 'bar',
          barWidth: 5,
          barGap: '-100%', // Set the gap to overlap the bars
          label: {
            show: false,
            position: 'inside',
            formatter: '{c}', // Show the value as label inside the bar
            color: '#fff'
          },
          itemStyle: {
            color: color  ,
            barBorderRadius: [10, 10, 10, 10]
          },
          data: [data[0]] // Set the fill value for the first progress
        },
       
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
      style={{ height: '20%',width:'100%' }}
    ></div>
  );
};

export default ProgressGraph;
