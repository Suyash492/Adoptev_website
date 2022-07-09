import React from 'react'
import {GiHamburgerMenu} from "react-icons/gi";

export default function Navsm() {
  return (
    <div className='mr-[5%] ml-[5%] flex justify-between mt-2 sm:hidden '>
        <GiHamburgerMenu className='my-auto text-xl'></GiHamburgerMenu>
        <h1 className='text-2xl text-[#02353c] font-extrabold'>ADOPTEV</h1>
        <button className='bg-[#02353c] text-white p-2 pt-1 pr-4 pl-4 rounded-lg'>Login</button>

    </div>
  )
}
