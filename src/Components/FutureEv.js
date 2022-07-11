import React from 'react'

export default function FutureEv() {
  return (
    <>
        <div className='bg-blue-200 '>
            <div className='mr-[5%] ml-[5%]  '>
                <div>
                    <h1 className='text-xl   md:text-2xl font-extrabold'>Find future <br /> for your fleet</h1>
                </div>

                <div className='mt-5 flex justify-between flex-wrap '>
                <div className="  button space-x-3  mb-4  ">
                    <button className='bg-[#F8F8F8] hover:bg-[#449342] hover:text-white p-3 rounded-full'> 3- Wheeler</button>
                    <button className='bg-[#F8F8F8] hover:bg-[#449342] hover:text-white p-3 rounded-full'> 2- Wheeler</button>
                    <button className='bg-[#F8F8F8] hover:bg-[#449342] hover:text-white p-3 rounded-full'> Bicycle</button>
                    <button className='bg-[#F8F8F8] hover:bg-[#449342] hover:text-white p-3 px-9 rounded-full'> Car</button>
                </div>
                <div>
                    <button className='border border-black p-3 px-4 rounded-lg '> Explore Vehicle</button>
                </div>
                </div>
               
            </div>
        </div>
    </>
  )
}
