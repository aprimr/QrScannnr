import React from 'react';
import { RiQrScan2Line } from "react-icons/ri";
import { BsQrCode } from "react-icons/bs";
import { NavLink } from 'react-router-dom';
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

function Home() {
  return (
    <>
    <div className='h-auto w-full px-5 mt-16 flex flex-col relative md:mt-24'>
      <div className='h-full w-full flex flex-col justify-center items-center'>
        <p className='text-3xl font-bold text-blue-500 md:text-4xl'>Welcome to QR Scannnr</p>
        <p className='text-xl text-gray-600 md:text-2xl'>Scan and Create QR codes</p>
      </div>
      <div className='h-full w-full mt-14 flex flex-wrap justify-center gap-16 md:gap-[15%]'>
        <div className='h-auto w-auto flex flex-col justify-center items-center'>
          <RiQrScan2Line className='pb-3 text-8xl text-gray-800 md:text-9xl' />
          <NavLink to='/scan' className='px-10 py-2 border-2 border-blue-400 bg-blue-400 text-white rounded text-xl font-semibold uppercase cursor-pointer hover:bg-transparent hover:text-blue-400 transition-all duration-300'>Scan Qr</NavLink>
        </div>
        <div className='h-auto w-auto flex flex-col justify-center items-center'>
          <BsQrCode className='pb-3 text-8xl text-gray-800 md:text-9xl' />
          <NavLink to='/generate' className='px-10 py-2 border-2 border-blue-400 bg-blue-400 text-white rounded text-xl font-semibold uppercase cursor-pointer hover:bg-transparent hover:text-blue-400 transition-all duration-300'>Generate Qr</NavLink>
        </div>
      </div>
      <div className="absolute px-2 py-4 flex-col gap-6 right-0 top-[40%] hidden md:flex">
        <a href='https://github.com/aprimr/'><FaGithub className='text-3xl hover:text-gray-600 cursor-pointer'/></a>
        <a href='https://www.linkedin.com/in/aprimregmi0/'><FaLinkedin className='text-3xl hover:text-gray-600 cursor-pointer'/></a>
      </div>
    </div>
    <div className="absolute h-auto w-full flex justify-center items-center px-2 py-4 gap-6 bottom-0 md:hidden">
      <a href='https://github.com/aprimr/'><FaGithub className='text-2xl hover:text-gray-600 cursor-pointer'/></a>
      <a href='https://www.linkedin.com/in/aprimregmi0/'><FaLinkedin className='text-2xl hover:text-gray-600 cursor-pointer'/></a>
    </div>
    </>
  );
}

export default Home;
