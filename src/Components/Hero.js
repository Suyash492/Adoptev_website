import React from 'react'
import image50 from '../assets/image 50.png'
import Group from '../assets/Group 8.png'
import {AiOutlineDown} from "react-icons/ai";
import {AiOutlineSearch} from "react-icons/ai";
import {AiOutlineArrowRight} from "react-icons/ai";
import image12 from '../assets/image 12.webp'
import image13 from '../assets/image 13.webp'
import image14 from '../assets/image 14.webp'
import image15 from '../assets/image 15.webp'
import image16 from '../assets/image 16.webp'
import image17 from '../assets/image 17.webp'
import image18 from '../assets/image 18.webp'


export default function Hero() {
    return (
        <>
            <div className=' ml-[5%] mr-[5%]  mb-10'>

                <div className='mt-4  ' >
                    <img src={image50} alt="" srcset="" className='w-[100%] rounded-md' />
                </div>
                <div className=' md:ml-[7%] '>

                    <div className='flex  rounded-lg bg-white -mt-5 mb-2 ml-3  w-fit shadow-black shadow-sm'>
                        <p className='p-2 bg-[#F8F8F8] hover:bg-[#02353c] hover:text-white hover:rounded-md '>3-wheeler</p>
                        <p className='p-2 bg-[#F8F8F8] hover:bg-[#02353c] hover:text-white  hover:rounded-md'>2-wheeler</p>
                        <p className='p-2  bg-[#F8F8F8] hover:bg-[#02353c] hover:text-white hover:rounded-md '>Bicycles</p>
                        <p className='p-2 bg-[#F8F8F8] hover:bg-[#02353c] hover:text-white  hover:rounded-md'>Cars</p>
                    </div>

                    <div className='flex space-x-3 text-sm rounded-lg bg-white w-fit p-4 lg:ml-24  shadow-black shadow-md'>
                        <div className=''>
                            <div className='flex space-x-2 font-bold md:text-xl text-[#02353c] '>
                                <p >Brand</p>
                                <AiOutlineDown className='mt-1 hidden'></AiOutlineDown>
                            </div>
                            <p className='font-thin md:font-semibold'>All Brands</p>
                        </div>

                        <div className=' '>
                            <div className='flex space-x-2 font-bold md:text-xl text-[#02353c] '>
                                <p >Price Range</p>
                                <AiOutlineDown className='mt-1 hidden'></AiOutlineDown>
                            </div>
                            <p className='font-thin md:font-semibold'>1-5 Lakh</p>
                        </div>

                        <div className=''>
                            <div className='flex space-x-2 font-bold md:text-xl text-[#02353c] '>
                                <p >Vehicle Use</p>
                                <AiOutlineDown className='mt-1 hidden'></AiOutlineDown>
                            </div>
                            <p className='font-thin md:font-semibold'>Passenger/Cargo</p>

                        </div>

                        <div className='bg-[#02353c] text-white rounded-lg p-2  text-2xl  m-auto '>
                            <AiOutlineSearch></AiOutlineSearch>
                        </div>

                    </div>

                    <div className='flex float-right font-bold mt-2 underline  text-[#02353c]  '>
                            <p>Advanced Search</p>
                            <AiOutlineArrowRight className='m-1.5 text-yellow-600 '></AiOutlineArrowRight>
                        </div>
                    </div>


                <div className=' flex bg-[#F8F8F8] rounded-2xl mt-12 justify-around'>
                    <div className='w-[150%] '>
                        <button className='bg-yellow-400 p-0.5 rounded-sm text-xs font-bold'>SPONSORED</button>
                        <img src={Group} alt="" srcset="" className='ml-4 mt-2' />
                    </div>

                    <div className='ml-10'>
                        <h1 className='mb-4 font-[inter] font-thin'>CHANGE THE RULES FOR A BETTER TOMORROW</h1>
                        <p className='text-xs font-[inter]  font-normal'>With 100% financing option for the on-road price, now is the besy time to bring home a <span className='text-[#449342]'>MAHINDRA TREO</span>  and cut the carbon footprint. EMI starts at <span className='text-[#449342]'>₹ 3999*/-</span>  per month.</p>

                        <button className='mt-4 bg-[#02353c] text-white p-2 rounded-lg'>Buy Now</button>
                    </div>

                </div>
                


                
               
            <div className=' flex space-x-2 shrink-0 overflow-x-auto gap-3 snap-x snap-mandatory mt-10 '>
                    <img src={image17} alt="" className=' snap-center' />
                    <img src={image16} alt="" className=' snap-center'/>
                    <img src={image12} alt="" className=' snap-center'/>
                    <img src={image13} alt="" className=' snap-center'/>
                    <img src={image14} alt="" className=' snap-center'/>
                    <img src={image15} alt="" className=' snap-center'/>
                    <img src={image18} alt="" className=' snap-center'/>
                </div>
            </div>


        </>
    )
}
