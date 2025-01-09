import React from "react";
function Home() {
    return (
        <div className=''>
            <div className='h-40 w-full px-5 py-5 flex gap-2 overflow-x-auto no-scrollbar'>
                <div className='h-full w-[30%] min-w-[30%] bg-[#FBF19A] rounded-2xl'></div>
                <div className='h-full w-[30%] min-w-[30%] bg-[#C89CF3] rounded-2xl'></div>
                <div className='h-full w-[30%] min-w-[30%] bg-[#6B74C0] rounded-2xl'></div>
                <div className='h-full w-[30%] min-w-[30%] bg-[#EF7181] rounded-2xl'></div>
                <div className='h-full w-[30%] min-w-[30%] bg-[#FBF19A] rounded-2xl'></div>
                <div className='h-full w-[30%] min-w-[30%] bg-[#FBF19A] rounded-2xl'></div>
            </div>
            <main className='px-5 py-5'>
                <div className='h-60 w-full bg-[#616367] opacity-70 rounded-2xl flex justify-center items-center'>
                    <h1 className='text-2xl text-white'>ИГРАТЬ</h1>
                </div>
            </main>
            <div className='flex justify-center items-center py-2 px-5 h-60 w-full gap-4'>
                <div className='flex flex-col w-[48%] h-full justify-between'>
                    <div className='bg-[#D9D9D9] h-[100px] opacity-30 rounded-2xl'></div>
                    <div className='bg-[#D9D9D9] h-[100px] opacity-30 rounded-2xl'></div>
                </div>
                <div className='h-full bg-[#D9D9D9] opacity-30 w-[50%] rounded-2xl'></div>
            </div>
        </div>
    );
};

export default Home;
