import React, { useRef, useState } from 'react'
import QRCode from "react-qr-code";
import { MdOutlineCancel } from "react-icons/md";
import { IoMdDownload } from "react-icons/io";
import { exportComponentAsPNG } from 'react-component-export-image';

function Generate() {
  let inputColor;
  const [text, setText] = useState('')
  const [color, setColor] = useState('#111827')

  const handleInput = (e)=>{
    setText(e.target.value)
  }
  
  const handleClearInput = ()=>{
    setText('')
  }

  const handleColorChange = (e)=>{
    inputColor = e.target.value
    if(inputColor==='#ffffff'){
      setColor('#111827');
    }
    else{
      setColor(inputColor)    
    }
  }

  //Print PNG
  const componentRef = useRef();

  


  return (
    <div className='h-[80vh] w-full p-10 flex flex-wrap gap-2 justify-center items-center md:h-[85vh] md:gap-40'>
      <div className=' h-auto w-full flex flex-col gap-3 md:w-1/3'>
        <div className='h-12 w-full flex flex-row border-2 border-gray-700 rounded-md'>
          <input type="text" value={text} onChange={handleInput} placeholder='Enter text here' className='h-full w-[85%] px-3 outline-none bg-transparent'/>
          {text!==''?<button onClick={handleClearInput} className='h-auto w-[15%] flex justify-center items-center text-2xl'><MdOutlineCancel className='hover:text-gray-500' /></button> :''}
        </div>
        <div className='h-12 w-full flex justify-center items-center gap-3'>
          <button onClick={() => exportComponentAsPNG(componentRef)} className='h-12 w-2/3 bg-gray-800 text-white flex justify-center items-center hover:bg-gray-700 gap-2 rounded'>SAVE QR <IoMdDownload className='text-xl'/> </button>
          <input type="color" value={color} className='color-input' onChange={handleColorChange}/>
        </div>
      </div>
      <div ref={componentRef} className='h-auto w-auto pt-16 pb-8 p-5 flex flex-col gap-3 md:pt-8' id='qr-code'>
        <div className='p-5 pb-3 border-4 rounded-md' style={{borderColor:color}}>
          <QRCode fgColor={color} value={text==''?'Hello user! You are using QR Scannnr.':text}/>
          <p className='text-center pt-2 font-bold opacity-40' style={{color: color}}>@QR Scannnr</p>
        </div>
      </div>
    </div>
  )
}

export default Generate