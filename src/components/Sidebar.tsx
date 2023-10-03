import React , {useState}from 'react';
import {BsFillTriangleFill,BsRecordCircleFill} from 'react-icons/bs';
import {LiaStopCircle} from 'react-icons/lia'
import {BiRadioCircleMarked} from 'react-icons/bi';
import {FaCircleDot} from 'react-icons/fa6';
import{FaCircle} from 'react-icons/fa';

import '../App.css';
import DonutGraph from './Graphs/Donut';
import LinesGraph from './Graphs/Linegraphs';
import ProgressGraph from './Graphs/Progressgraph';


interface SidebarProps {
  subcategoryAverages: any[]; // Define the type for your filtered data here
 
  subcategorySales: { [subcategory: string]: number[] };
  salesArray:any[];
  profitArray:any[];
 

}



const Sidebar: React.FC<SidebarProps> = ({subcategoryAverages,subcategorySales,salesArray,profitArray}) => {
  const [hoveredValue, setHoveredValue] = useState<number | null>(null);
  const [hoverName, setHoverName] = useState<string | null>(null);
  const [labelName, setLabelName] = useState('');
  const [labelValue, setLabelValue] = useState('');


  const subcategoryColors: string[] = ['#E323FF', '#8AFF6C', '#FFD422', '#E323FF','#FFD422','#E323FF','#FFD422','#8AFF6C','#8AFF6C','#8AFF6C','#FF6A2A','AE2AFF','#FF6A2A','#FFD422'];

  const progressgraphcolors:string[] =['#4DFFDF','#4DA1FF','#E323FF','#7517F8','#FFD422','#FFD422','#4DFFDF']

  const onHoverLabelData = (name: string, value: string) => {
    setLabelName(name);
    setLabelValue(value);
  };


  


   

  return (
    <div className="h-[90vh]  grid grid-rows gap-1 w-[20vw] lg:max-xl:w-[25vw] xs:max-lg:w-[75vw] bg-gray-200 font-mainfont ">
    
      <div className="  text-15xl mt-3 font-bold  xs:max-lg:mt-[10%] text-white  flex pt-1 justify-start font-mainfont"> General Statistics</div>


{/* widget Second div */}

<div className="w-[100%] rounded-3xs row-span-2 flex items-center justify-center h-[9vh] bg-blueish-black mb-3 xs:max-lg:my-[3rem] lg:mt-4 py-3 ">
<div className='w-[40%] h-[100%] '>
        <DonutGraph data={subcategoryAverages} onHoverLabelData={onHoverLabelData} />
        

    </div>
      <div className=" text-left  border border-gray-300  w-[60%] h-[100%] rounded-3xs bg-blueish-black flex flex-col items-start justify-center overflow-hidden py-2 px-5">
      <h2 className="text-center text-base font-normal text-white  mb-1 h-[2vh] "> {labelName?labelName:'Sales'}</h2>
      <div className="flex flex-row items-center mt-1 h-[3vh] ">
        <p className="text-15xl font-bold mr-2 text-white ">${labelValue?labelValue:3425}</p>
        <div className="flex items-center justify-center ">
          <BsFillTriangleFill className="text-electric-green pt-1 h-3 w-3" />
          <span className="text-[5] pt-1 text-electric-green text-xs">10%</span>
        </div>
      </div>
      <p className="text-xs h-[1vh] pb-2 lg:max-xl:text-[10px] text-white  font-thin ">Compared to $21,504 last year</p>
    </div>
      
      
      </div> 



      {/* First div */}
      <div className="bg-blueish-black row-span-5 h-[32vh] xs:max-lg:h-[50vh] rounded-3xs mb-2  xs:max-lg:mt-[10%]"> 
      
      <div className=" rounded-lg flex flex-col justify-center items-center h-[100%] pt-1">
      {/* First Div with a Chart */}
      <div className=" h-[60vh] w-[100%] xs:max-lg:h-[75vh] xs:max-lg:w-[80vw]   ">
      
       <LinesGraph salesdata={salesArray} profitdata={profitArray} onHoveredValueChange={(e:any)=>setHoveredValue(e)} onHoverNameChange={(e:any)=>setHoverName(e)}/>
      </div>

      {/* Second Div with Subheading and Two Horizontal Divs */}
      <div className=" text-left  border border-gray-300 mt-1 w-[80%] h-[40%] rounded-3xs  flex flex-col items-start justify-center  ">
      <h2 className="text-center text-base font-normal text-white  mb-1 h-[2vh] "> {hoverName=='Profit'?hoverName:'Sales'}</h2>
      <div className="flex flex-row items-center mt-1 h-[2vh] ">
        <p className="text-15xl font-bold mr-2 text-white ">${hoveredValue?hoveredValue:425}</p>
        <div className="flex items-center justify-center ">
          <BsFillTriangleFill className="text-electric-green pt-1 h-3 w-3" />
          <span className="text-[5] pt-1 text-electric-green text-xs">10%</span>
        </div>
      </div>
      <p className="text-xs h-[1vh] pb-2 lg:max-xl:text-[10px] text-white  font-thin ">Compared to $21,504 last year</p>
    </div>

      {/* Third Div with Three Stacked Divs */}
      
      <div className="w-[100%] rounded-3xs text-smi text-white mt-1 mb-1 pb-4 xs:max-lg:pb-12  overflow-auto  box">
            {Object.entries(subcategorySales).map(([subcategory, data], index:any) => (
              
              <div key={index} className="flex flex-row justify-center items-center px-5  ">
                <BsRecordCircleFill style={{ color: progressgraphcolors[index]}} className='p-2 '/>
                <div className="w-2/6 flex justify-start items-center">{subcategory}</div> 
               
                <div className="w-3/6  mt-3 flex justify-center items-center ">
                  
                 
                   <ProgressGraph  data={data} index={index} color={progressgraphcolors[index]} />
                 </div> 
              </div>
            ))}
          </div>
        </div>
      </div> 

     
      <div className=" row-span-4 h-[65%] w-[100%] text-left text-smi text-white bg-blueish-black rounded-3xs  pt-2 pb-[2vh] xs:max-lg:mb-[3rem] xs:max-lg:mt-[5rem] mt-2">
      <div className="box  bg-gray-200 mx-auto h-[100%] px-5 overflow-y-auto">
      {subcategoryAverages.map((subcategoryAverage, rowIndex) => (
        <div key={rowIndex} className="grid grid-cols-4 py-1 ">
                      <div className={`col-span-1 flex items-center justify-center`}>
  
    <FaCircle   style={{ color: subcategoryColors[rowIndex],
    border: '6px solid black', 
    borderRadius: '50%', 
     }} className={`h-2 w-2 flex items-center justify-center   `} />

    
</div>
          <div className="col-span-1  ">{subcategoryAverage.subcategory}</div>
          <div className="col-span-1  text-steelblue-100 text-right "> ${subcategoryAverage.averageSale}</div>
          <div className="col-span-1 text-right ">${subcategoryAverage.averageProfit}</div>
          <div className={`col-span-1 flex items-center justify-center`}>
          {/* <BsFillTriangleFill className= {`col-span-1 h-3 w-3 flex items-center justify-center ${row.triangleColor} ${row.rotate}`} /> */}

          </div>
        </div>
      ))}
    </div>
        </div> {/* Third div */}
    </div>
  )
}

export default Sidebar
