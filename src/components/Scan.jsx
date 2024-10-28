import React, { useState } from 'react'
import { Scanner } from '@yudiel/react-qr-scanner'
import { MdDeleteOutline } from "react-icons/md";
import { FaRegCopy } from "react-icons/fa6";
import { MdOutlineDeleteSweep } from "react-icons/md";

function Scan() {
  const[value, setValue] = useState()

  const handleScan = (result)=>{
    const newValue = result[0].rawValue
    setValue(newValue)
  }

  return (
    <div className='h-[80vh] w-full flex mt-2 flex-wrap gap-6 justify-center items-center md:h-[85vh] md:gap-20'>
      <div className='h-[400px] w-auto'>
        <div className='h-96 w-96 flex justify-center items-center gap-3 flex-col'>
          <Scanner onScan={(result) => handleScan(result)} />
          <p className='text-xl font-bold text-gray-300'>@QR Scannnr</p>
        </div>
      </div>
      <div className='h-72 w-full mx-4 md:w-1/2 shadow-xl border-2 border-gray-200 rounded'>
        <p className='text-2xl font-bold p-4 '>Scanned Result</p>
        <p className='h-full w-full px-4  text-xl'>{value}</p>
      </div>
    </div>
  )
}

export default Scan
