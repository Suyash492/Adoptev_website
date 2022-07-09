import React from 'react'
import {GiHamburgerMenu} from "react-icons/gi";

export default function Nav() {
    return (
        <>
            <div className='bg-[#E1EEDD] hidden sm:block'>
                <div className='ml-[5%] mr-[5%] flex space-x-4 p-1'>
                    <div className='mt-1 '>

                        <GiHamburgerMenu></GiHamburgerMenu>
                    </div>
                    <div className='hidden md:flex md:space-x-3 md:text-center lg:space-x-3 '>
                        <p>All</p>
                        <p>3-wheelers</p>
                        <p>2-wheelers</p>
                        <p>Bicycles</p>
                        <p>Cars</p>
                        <p>Batteries</p>
                        <p>GPS</p>
                        <p>Wheels</p>
                        <p>Information System</p>
                        <p>Other Accessories</p>

                    </div>

                </div>
            </div>

        </>
    )
}
