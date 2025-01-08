import React from 'react'
import Header from './Header'
import Footer from './Footer'
export default function Shopping() {
  return (
    <div className='h-[90vh]'>
         <div className='px-10'>
            <div className='text-center text-white text-3xl'>LOYALTY CARD</div>
            <div className='w-full h-[230px] bg-black mt-5 rounded-2xl'></div>
         </div>
         <h1 className='mt-5 mb-5 pl-5 text-white text-3xl'>SHOP</h1>
         <div className='grid grid-cols-2 w-full px-5 gap-6 pb-[12vh]'>
            <div className='bg-[#363941] w-auto h-60 rounded-2xl'></div>
            <div className='bg-[#363941] w-auto h-60 rounded-2xl'></div>
            <div className='bg-[#363941] w-auto h-60 rounded-2xl'></div>
         </div>
    </div>
  )
}
