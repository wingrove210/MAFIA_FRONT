import React from 'react'
import card from '../assets/Card.png'
export default function Shopping() {
  return (
    <div className='min-h-[100vh] bg-transparent'>
         <div className='px-10'>
            <div className='text-center text-white text-3xl font-dune'>LOYALTY CARD</div>
            <div className='w-full h-[230px] mt-5 rounded-2xl'>
              <img src={card} alt="" className='w-full h-full'/>
            </div>
         </div>
         <h1 className='mt-5 mb-5 pl-5 text-white text-3xl font-dune'>SHOP</h1>
         <div className='grid grid-cols-2 w-full px-5 gap-6 pb-[12vh]'>
            <div className="bg-gradient-to-l from-[#3E424B] to-[#363941] w-auto h-60 rounded-2xl"></div>
            <div className="bg-gradient-to-l from-[#3E424B] to-[#363941] w-auto h-60 rounded-2xl"></div>
            <div className="bg-gradient-to-l from-[#3E424B] to-[#363941] w-auto h-60 rounded-2xl"></div>
            <div className="bg-gradient-to-l from-[#3E424B] to-[#363941] w-auto h-60 rounded-2xl"></div>
            <div className="bg-gradient-to-l from-[#3E424B] to-[#363941] w-auto h-60 rounded-2xl"></div>
            <div className="bg-gradient-to-l from-[#3E424B] to-[#363941] w-auto h-60 rounded-2xl"></div>
         </div>
    </div>
  )
}
