import React from "react";
import Header from "./Header";
import Footer from "./Footer";
function Home() {
    return (
        <div className=''>
            <div className='h-40 w-full px-5 py-5 flex gap-2'>
                <div className='h-full w-[30%] bg-[#FBF19A] rounded-2xl'></div>
                <div className='h-full w-[30%] bg-[#FBF19A] rounded-2xl'></div>
                <div className='h-full w-[30%] bg-[#FBF19A] rounded-2xl'></div>
            </div>
            <main className='px-5 py-5'>
                <div className='h-60 w-full bg-[#2a2a2b] rounded-2xl flex justify-center items-center'>
                    <h1 className='text-2xl text-white'>Play Now</h1>
                </div>
            </main>
            <div className='flex justify-center items-center py-2 px-5 h-60 w-full gap-4'>
                <div className='flex flex-col w-[48%] h-full justify-between'>
                    <div className='bg-white h-[100px] rounded-2xl'></div>
                    <div className='bg-white h-[100px] rounded-2xl'></div>
                </div>
                <div className='h-full bg-white w-[50%] rounded-2xl'></div>
            </div>
        </div>
    );
};

export default Home;
