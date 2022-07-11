import React from 'react'
import image47 from '../assets/image 47.png'
import image45 from '../assets/image 45.png'
import image48 from '../assets/image 48.png'

export default function FutureEv() {
  return (
    
        <div className='bg-blue-200 pb-10 pt-5'>
            <div className='mr-[5%] ml-[5%]  '>
                <div>
                    <h1 className='text-xl text-[#02353c]  md:text-2xl font-extrabold'>Find future <br /> for your fleet</h1>
                </div>

                <div className='mt-5 flex justify-between flex-wrap  '>
                <div className=" flex button space-x-3  mb-4  ">
                    <button className='bg-[#F8F8F8] hover:bg-[#02353c] hover:text-white p-3 rounded-xl'> 3- Wheeler</button>
                    <button className='bg-[#F8F8F8] hover:bg-[#02353c] hover:text-white p-3 rounded-xl'> 2- Wheeler</button>
                    <button className='bg-[#F8F8F8] hover:bg-[#02353c] hover:text-white p-3 rounded-xl'> Bicycle</button>
                    <button className='bg-[#F8F8F8] hover:bg-[#02353c] hover:text-white p-3 px-9 rounded-xl'> Car</button>
                </div>
                <div className=''>
                    <button className='hidden md:block border border-black p-3 px-4 rounded-lg '> Explore Vehicle</button>
                </div>
                </div>
        <div className='flex justify-between shrink-0 overflow-x-auto gap-6  snap-x snap-mandatory bg-white p-2 rounded-3xl'>
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

           {/* 3rd BOX START */}
           <div className=''>

          
          <div>
            <img src={image48} alt="" className='rounded-3xl mb-2 snap-center'/>
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
            <h1 className='text-xl font-bold text-[#449342]'>Piaggio Ape </h1>
            <h1 className='text-xl font-bold text-[#449342]'>2,29,999 <span className='text-lg text-black font-normal mr-4'>onwards</span></h1>
            </div>
            <div className='mt-2'>
              <button className='border border-black p-1 pr-6 pl-6 rounded-md'>View Offers</button>
            </div>
          </div>

          </div>

           {/* 4th BOX START */}
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
            </div>
        </div>
        </div>
    
  )
}
