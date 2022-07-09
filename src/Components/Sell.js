import React from 'react'

import Rectangle100 from '../assets/Rectangle 100.png'
import image11 from '../assets/image 11.png'
import image23 from '../assets/image 23.png'
import image24 from '../assets/image 24.png'
import image28 from '../assets/image 28.png'

export default function Sell() {
  return (
    <div className='mr-[5%] ml-[5%]'>
        <div className=' '>
            <div>
                <p className='font-bold text-[#449342]'>JOIN WITH US</p>
                <h1 className='text-xl font-bold'>Sell EV'S,Spare & Accessories With Us</h1>
            </div>
            <div className='m-auto text-center'>
                <button className='bg-[#02353c] text-white p-1 mt-4 mb-4 pr-4 pl-4 rounded-sm'> Join Now</button>
            </div>
        </div>

        <div className=' text-center mb-10'>
            <div className=''>
                <img src={Rectangle100} alt="" className='m-auto' />
                <h1 className='text-[#449342] font-bold text-xl'>EV Startups</h1>
                <p>Register your EV startup with us and get 1000's of supplier at one place with AdoptEV. </p>
            </div>
            <div>
                <img src={Rectangle100} alt="" className='m-auto'/>
                <h1 className='text-[#449342] font-bold text-xl'>EV Dealer And Supplier</h1>
                <p>Join as a dealer or supplier and reach more customer nationwide and connect with startups and supply various parts. </p>
            </div>
            <div>
                <img src={Rectangle100} alt="" className='m-auto' />
                <h1 className='text-[#449342] font-bold text-xl'>Battery & Accessories</h1>
                <p>Join as battery & accessories seller , sell and ship your product nationwide with AdoptEV.  </p>
            </div>


        </div>

        <div>
            <div className='hidden'>
                <img src={image11} alt="" />
            </div>
            <div className='bg-blue-200 rounded-lg p-4 mb-10'>
                <h1 className='text-2xl font-bold'>Own an EV with</h1>
                <h1 className='text-2xl font-bold text-[#449342]'>AdoptEV</h1>
                <p className='mt-4'>Subscribe our newsletter and don't miss any promotional offers.</p>
                <div className='flex bg-white justify-between mt-4'>
                <input type="" placeholder='Enter your email address' className='p-1' />
                <button className=' pr-4 pl-4 bg-[#02353c] text-white' >Subscribe</button>
                </div>
            </div>
        </div>

        <div className='mb-16'>
            <div className='text-center mb-4'>
                <p className='text-[#449342] font-bold'>INSTAGRAM,YOUTUBE,TWITTER</p>
                <h1 className='text-xl font-bold'>Social</h1>
            </div>
            <div className='flex  '>
                <img src={image23} alt="" className='w-1/3 rounded-md px-1' />
                <img src={image24} alt="" className='w-1/3 rounded-md px-1' />
                <img src={image28} alt=""  className='w-1/3 rounded-md px-1'/>
            </div>
        </div>



    </div>
  )
}
