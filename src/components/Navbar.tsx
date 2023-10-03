import React from 'react';
import {useState} from 'react';
import { AiOutlineSearch,AiOutlineClose } from 'react-icons/ai';
import {FaUserAlt} from 'react-icons/fa';
import {GiHamburgerMenu} from 'react-icons/gi';
import{IoOptionsOutline} from 'react-icons/io5'




const Navbar: React.FC = () => {

  


  let Links =[
    {name:"Statiscs",link:"/"},
    {name:"Overview",link:"/"},
    {name:"Dasboard",link:"/"},
    {name:"Analytics",link:"/"},
    
  ];
  let [open,setOpen]=useState(false);




  return (
    <nav className=" w-[100%] h-[6vh] flex items-center justify-between text-base text-purple-blue bg-blueish-black shadow-md font-sans sticky top-0 left-0 z-100 py-1 ">
      {/* First div */}
      <div className="flex items-center space-x-2 pl-[4vw] ">
        <img src={require('../images/mainlogo.png')} alt="Logo" className="h-9 w-9" />
        <div className="text-white font-bold  font-archivo text-[20.51px] xs:max-lg:hidden">Super</div>
      </div>

      {/* Second div */}
      <div className="flex-grow flex justify-center">
        <div className="flex items-center space-x-4 xs:space-x-0 ">
          <div className="relative flex items-center mr-[10vw]">
            <input
              type="text"
              placeholder="Search..."
              className="px-2 py-1 pr-8 text-white border-black focus:outline-none  rounded-lg bg-black border-none w-[25vw] h-5 "
            />
            <button className="absolute text-purple-blue right-2 top-1/2 transform -translate-y-1/2 bg-black border-none focus:outline-none">
              
              <AiOutlineSearch/>
            </button>
          </div>

          <div onClick={()=>setOpen(!open)} className=' absolute right-[18vw] cursor-pointer md:hidden text-purple-blue z-50'>
      {open ? <AiOutlineClose className='h-6 w-6'/> : <GiHamburgerMenu className='h-6 w-6'/>}
      </div>
          {/* <div className="flex items-center space-x-[5vw] xs:max-md:hidden  ">
            <div className="cursor-pointer ">Statistics</div>
            <div className="cursor-pointer ">Dashboard</div>
            <div className="cursor-pointer "> Analytics</div>
          </div> */}

      <ul className={`md:flex items-center  md:pb-0  absolute md:static list-none text-base opacity-100  left-0 right-0 w-[100vw] md:w-auto md:pl-0   xs:bg-blueish-black xs:max-md:w-[100%] transition-all duration-500 ease-in ${open ? 'top-[-10px] ':'top-[-490px]'} `}>
        {
          Links.map((link)=>(
            <li key={link.name} className='md:ml-8 md:max-lg:ml-3 text-xl md:my-0 my-5 nav'>
              <a href={link.link} className=' hover:text-white duration-500 no-underline text-base text-purple-blue'>{link.name}</a>
            </li>
          ))
        }</ul>
        </div>
      </div>

      {/* Third div */}
      <div className="flex items-center space-x-2">
        <button className="focus:outline-none text-purple-blue bg-blueish-black border-none ">
          <FaUserAlt className='h-5 w-5'/>
        </button>
        <button className="focus:outline-none text-purple-blue bg-blueish-black border-none pr-[3vw] xs:max-md:hidden">
          <IoOptionsOutline className ='h-5 w-5'/>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;



