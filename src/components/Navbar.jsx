import React from 'react'
import { BsQrCodeScan } from "react-icons/bs";
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
  <>
    <div className='h-20 w-full flex justify-around items-center'>
      <NavLink to={'/'} className='text-3xl h-auto font-semibold flex items-center gap-4'>
        <BsQrCodeScan className='text-blue-400'/>
        <p>QR Scannnr</p>
      </NavLink>
      {/* desktop only */}
      <div className="hidden md:flex text-2xl font-medium gap-5 ">
      <NavLink to="/scan" className={({isActive})=> `${isActive?'text-blue-400 hover:text-blue-400':'text-gray-700 hover:text-gray-500'}`}>Scan</NavLink>
      <NavLink to="/generate" className={({isActive})=> `${isActive?'text-blue-400 hover:text-blue-400':'text-gray-700 hover:text-gray-500'}`}>Generate</NavLink>
      </div>
    </div>
    {/* mobile only */}
    <div className="h-auto w-full flex justify-center md:hidden text-xl font-medium gap-7 ">
      <NavLink to="/scan" className={({isActive})=> `${isActive?'text-blue-400 hover:text-blue-400':'text-gray-700 hover:text-gray-500'}`}>Scan</NavLink>
      <NavLink to="/generate" className={({isActive})=> `${isActive?'text-blue-400 hover:text-blue-400':'text-gray-700 hover:text-gray-500'}`}>Generate</NavLink>
    </div>
    <div className='border-b-2 mt-2 md:mt-0'></div>
  </>
  )
}

export default Navbar