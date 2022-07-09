import React from 'react'
import {FiArrowRightCircle} from "react-icons/fi";
import {FiArrowLeftCircle} from "react-icons/fi";
import {TbMotorbike} from "react-icons/tb";
import {MdOutlineElectricBike} from "react-icons/md";
import {SiHandshake} from "react-icons/si";
import {FaCarBattery} from "react-icons/fa";
import image47 from '../assets/image 47.png'
import image45 from '../assets/image 45.png'
import image49 from '../assets/image 49.png'

export default function PopularEvs() {
  return (
    <>
      {/* start */}
      <div className='mr-[5%] ml-[5%]'>
        <div className='space-y-4 mb-6'>
          <h1 className='text-xl font-extrabold'> Popular EV'S</h1>
          <h3 className='text-xs font-semibold'> With over 1 thousand + electric vehicles available on the adoptev</h3>
        </div>

        <div className=' flex justify-between '>
          <div className="button space-x-1 mb-4 ">
            <button className='bg-[#F8F8F8] hover:bg-[#449342] hover:text-white p-2 rounded-lg'> 3- Wheeler</button>
            <button className='bg-[#F8F8F8] hover:bg-[#449342] hover:text-white p-2 rounded-lg'> 2- Wheeler</button>
            <button className='bg-[#F8F8F8] hover:bg-[#449342] hover:text-white p-2 rounded-lg'> Bicycle</button>
            <button className='bg-[#F8F8F8] hover:bg-[#449342] hover:text-white p-2 pr-6 pl-6 rounded-lg'> Car</button>
          </div>

          <div className="click  text-5xl space-x-4 mt-1 hidden">
            <FiArrowLeftCircle></FiArrowLeftCircle>
            <FiArrowRightCircle></FiArrowRightCircle>
          </div>
        </div>

      
        <div className='flex shrink-0 overflow-x-auto gap-6 snap-x snap-mandatory'>
          {/* 1ST BOX START */}
          <div className=''>

          
              <div>
                <img src={image47} alt="" className='rounded-3xl mb-2 snap-center'/>
              </div>
              <div className='flex space-x-2 mb-2'>
                <div >
                  <p>Seating</p>
                  <p>4person</p>
                </div>
                <div >
                  <p>0-100%</p>
                  <p>120 min</p>
                </div>
                <div >
                  <p>Range</p>
                  <p>120 min</p>
                </div>
                <div >
                  <p>Range</p>
                  <p>120 min</p>
                </div>

              </div>

              <div className='flex w-80'>
                <div>
                <h1 className='text-xl font-bold text-[#449342]'>Euler Hiload</h1>
                <h1 className='text-xl font-bold text-[#449342]'>2,49,999 <span className='text-lg text-black font-normal mr-4'>onwards</span></h1>
                </div>
                <div className='mt-2'>
                  <button className='border border-black p-1 pr-6 pl-6 rounded-md'>View Offers</button>
                </div>
              </div>

          </div>

          {/* SECOND BOX */}
          <div>

          
              <div className=''>
                <img src={image45} alt="" className='rounded-3xl mb-2 snap-center' />
              </div>
              <div className='flex space-x-2'>
                <div >
                  <p>Seating</p>
                  <p>4person</p>
                </div>
                <div >
                  <p>0-100%</p>
                  <p>120 min</p>
                </div>
                <div >
                  <p>Range</p>
                  <p>120 min</p>
                </div>
                <div >
                  <p>Range</p>
                  <p>120 min</p>
                </div>

              </div>

              <div className='flex w-80'>
                <div>
                <h1 className='text-xl font-bold text-[#449342]'>Treo Zor</h1>
                <h1 className='text-xl font-bold text-[#449342]'>3,99,999 <span className='text-lg text-black font-normal mr-4'>onwards</span></h1>
                </div>
                <div className='mt-2'>
                  <button className='border border-black p-1 pr-6 pl-6 rounded-md'>View Offers</button>
                </div>
              </div>

          </div>

        </div>  
        
        <div className='text-center'>
          <button className='bg-[#02353c] text-white p-4 pr-12 pl-12 text-xl mt-10 mb-10 rounded-md '>View All</button>
        </div>

{/* OUR SERVICES */}

        <div className='text-center mb-10'>
        <p className='font-bold text-[#449342] ml-16 '>OUR SERVICES</p>
          <h1 className='font-bold text-2xl'>How AdoptEV can help</h1>
        </div>


        <div className='flex text-center space-x-2 shrink-0 overflow-x-auto  snap-x snap-mandatory '>
          <div className=' hover:bg-white hover:shadow-lg hover:shadow-black p-2 w-48 snap-center'>
            <TbMotorbike className='text-6xl shadow-md shadow-black p-2 rounded-full m-auto hover:bg-[#02353c] hover:text-white'></TbMotorbike>
            <p className='text-sm mt-4'>Find all EV <br /> at one place</p>
          </div>

          <div className='hover:bg-white hover:shadow-lg hover:shadow-black p-2  snap-center '>
            <MdOutlineElectricBike className='text-6xl shadow-md shadow-black p-2 rounded-full m-auto hover:bg-[#02353c] hover:text-white'></MdOutlineElectricBike>
            <p className='text-sm mt-4'>Best deal on EV at one place</p>
          </div>

          <div className='hover:bg-white hover:shadow-lg hover:shadow-black p-2  snap-center w-'>
            <FaCarBattery className='text-6xl shadow-md shadow-black p-2 rounded-full m-auto hover:bg-[#02353c] hover:text-white'></FaCarBattery>
            <p className='text-sm mt-4'>Buy accessories and battery for your EV</p>
          </div>

          <div className='hover:bg-white hover:shadow-lg hover:shadow-black p-2 w-48 snap-center'>
            <SiHandshake className='text-6xl shadow-md shadow-black p-2 rounded-full m-auto hover:bg-[#02353c] hover:text-white'></SiHandshake>
            <p className=' text-sm mt-4'>Be partner with AdoptEV</p>
          </div>
        </div>

{/* Buy Ev */}
        <div className=' mt-10 mb-10  '>
          <div className='m-1'>
              <p className='font-bold text-[#449342]'>Buy EV</p>
              <h1 className='text-2xl font-bold'>Buying EV is now made easier</h1>
              <p className='mt-4'>Buy EV from leading dealers and brand all across INDIA. It's now easy to buy latest EV and get best deal from  brand dealers. We make it easy to buy EV apply filters on range, charging time and more. You can avail subsidy upto ₹50k and more on electric scooters, bikes, 3-wheelers,cars and other transport options. </p>
              <div className='text-center'>
              <button className='bg-[#02353c] text-white p-2 pr-4 pl-4 rounded-md mt-4 mb-4' >View All</button>

              </div>
          </div>
          <div className=''>
            <img src={image49} alt=" " className=' '/>
          </div>
        </div>





      </div>

    </>
  )
}
