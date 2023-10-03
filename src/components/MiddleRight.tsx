import React, { useState } from 'react';
import {AiFillCodepenCircle, AiOutlineBranches, AiOutlineMinus, AiOutlinePlus, AiOutlinePullRequest, AiOutlineUserAdd} from 'react-icons/ai';
import {LiaDotCircle} from 'react-icons/lia';
import {RxSlider} from 'react-icons/rx';
import {FiPieChart} from 'react-icons/fi';
import ShankeyGraph from './Graphs/Shankey';



interface MiddlerightProps {
  processedData: any[]; // Define the type for your filtered data here
  handleFilterClick: (days: number) => void; // Define the type for the filter click handler function

}



interface WidgetProps {
  icon: JSX.Element;
  subheading: string;
  text: string;
}

const Widget: React.FC<WidgetProps> = ({ icon, subheading, text }) => {
  return (
    <div className="flex flex-col items-center p-4 h-[15vh] w-[8vw] ">
      <div className=" rounded-3xs p-2   h-[5vh] w-[3vw]  xs:max-xl:w-[2.5rem] flex justify-center items-center box-border border-[1px] border-solid border-steelblue-200 text-steelblue-200">
        {/* Insert your icon here */}
        {icon}
      </div>
      <div className="mt-2 text-center text-sm font-bold text-steelblue-200 h-[1.5vh]">{subheading}</div>
      <div className="font-extrabold md:mt-4 text-41xl xs:max-lg:text-[2rem] text-white h-[6vh] flex items-center justify-center xs:max-lg:mt-[5vh] ">{text}</div>
    </div>
  );
};






const Middleright: React.FC<MiddlerightProps> = ({processedData,handleFilterClick}) => {


 // State to manage the zoom level
 const [zoomLevel, setZoomLevel] = useState<number>(100);

 // Function to update the zoom level and apply it to the content
 const updateZoom = () => {
   const zoomedContent = document.getElementById('zoomedContent');
   if (zoomedContent) {
     zoomedContent.style.transform = `scale(${zoomLevel / 100})`;
   }
 };

 // Function to zoom in
 const zoomIn = () => {
   setZoomLevel((prevZoomLevel) => Math.min(prevZoomLevel + 10, 200)); // Increase the zoom level by 10%, capped at 200%
   updateZoom();
 };

 // Function to zoom out
 const zoomOut = () => {
   setZoomLevel((prevZoomLevel) => Math.max(prevZoomLevel - 10, 10)); // Decrease the zoom level by 10%, capped at 10%
   updateZoom();
 };

 console.log(processedData);

  return (
    <div>
    <div className="flex items-center justify-center w-[75vw] xs:max-lg:w-[90vw] relative">
      <div className="bg-gray-200 text-center p-4 w-[100%] h-[66vh] relative flex flex-col justify-center items-center xs:max-lg:mt-[3vh]">
        {/* Background Text */}
        <div className="absolute inset-0 flex top-[13vh]  justify-center text-53xl sm:max-lg:text-[3.2rem] font-extrabold text-gray xs:max-sm:text-[2.5rem]">
        Data visualisation
        </div>
        
        {/* Div with buttons */}
        <div className="absolute top-0 h-full flex flex-col items-center justify-center">
          <div className=" mt-8 h-1/8 w-[15vw] text-center  font-mulish flex items-center justify-between absolute top-[7vh]   xs:max-lg:mr-[3vh] z-20">
            <button className="w-8 h-6  rounded-2xl text-white  font-bold   bg-black hover:bg-mediumslateblue text-smi  m-1" onClick={() =>handleFilterClick(1)} >1D</button>
            <button className="w-8 h-6  rounded-2xl text-white  font-bold  bg-black hover:bg-mediumslateblue text-smi  m-1" onClick={() =>handleFilterClick(7)}>1W</button>
            <button className="w-8 h-6  rounded-2xl text-white font-bold  bg-black hover:bg-mediumslateblue text-smi  m-1" onClick={() => handleFilterClick(30)}>1M</button>
            <button className="w-8 h-6  rounded-2xl text-white  font-bold  bg-black hover:bg-mediumslateblue text-smi m-1" onClick={() => handleFilterClick(90)}>3M</button>
            <button className="w-8 h-6 rounded-2xl text-white  font-bold  bg-black hover:bg-mediumslateblue text-smi m-1" onClick={() => handleFilterClick(365)}>1Y</button>
          </div>
          
          {/* Lower Div */}
          <div className='flex flex-row-reverse xs:max-lg:flex-col justify-between xs:max-lg:items-center h-[100%] w-[65vw] xs:max-lg:w-[100vw]  absolute top-[13vh]'>
          <div id="zoomedContent" className="h-[75%]  w-[55vw] xs:max-lg:w-[100vw]    absolute  top-[13vh] right-[10vw] xs:max-lg:right-[0vw] ">
          <ShankeyGraph data={processedData}/>
          </div>
          <div className='h-[70%] w-[3vw] xs:max-lg:w-[5vh] xs:max-lg:rotate-90 rounded-lg xs:max-md:mr-[10vh]  text-purple-blue  absolute  top-[13vh] xs:max-lg:top-[35vh] xs:max-lg:mb-[20vh]'>
            <div className='rounded-lg bg-blueish-black '>
            <div className='rounded-lg bg-blueish-black cursor-pointer h-6 p-2 hover:text-white'>
              <AiOutlinePlus   id="zoomInBtn" onClick={zoomIn}/>
            </div>
            <div className='rounded-lg bg-blueish-black cursor-pointer h-6 p-2 hover:text-white'>
              <AiOutlineMinus id="zoomOutBtn" onClick={zoomOut}/>
            </div>
            </div>
            <div className='rounded-lg bg-blueish-black cursor-pointer h-6 p-2 mt-8 mb-8'>
            <LiaDotCircle/>  
            </div>
            <div className='bg-blueish-black rounded-lg'>
            <div className='rounded-lg bg-blueish-black cursor-pointer h-6 p-2 mt-8'>
            <AiOutlineBranches/>
            </div>

            <div className='rounded-lg bg-blueish-black cursor-pointer h-6 p-2 '>
            <AiOutlinePullRequest/>
            </div>
            <div className='rounded-lg bg-blueish-black cursor-pointer h-6 p-2 '>
            <RxSlider/>
            </div>
            </div>

          </div>
          </div>
        </div>
        </div>
        </div>





    {/* Lower widgets */}

       <div className="flex justify-center xs:max-lg:w-[100%] xs:max-lg:mt-[20vh] ">
      <div className="flex space-x-6 xs:max-lg:space-x-12 ">
        <Widget
          icon={<AiFillCodepenCircle className='w-[1.2rem] h-[1.3rem] ' />}
          subheading="Trend goods"
          text="204"
        />
        <Widget
          icon={<AiOutlineUserAdd className='w-[1.2rem] h-[1.3rem]'/>}
          subheading="Shopping views"
          text="65,540"
        />
        <Widget
          icon={<FiPieChart className='w-[1.2rem] h-[1.3rem]'/>}
          subheading="Store dymanics"
          text="325"
        />
      </div>
      </div>
      
    </div>
  )
}

export default Middleright
