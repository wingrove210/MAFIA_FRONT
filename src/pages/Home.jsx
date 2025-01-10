import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import girl from "../assets/Girl.png"
import card from '../assets/Card.png'
import { FaArrowRight } from "react-icons/fa6";
import { MdKeyboardArrowRight } from "react-icons/md";

function Home() {
    const [cards, setCards] = useState([]);

    useEffect(() => {
        // Загружаем данные с API
        fetch("http://localhost:8000/billboards")
            .then((response) => response.json())
            .then((data) => setCards(data))
            .catch((error) => console.error("Error fetching cards:", error));
    }, []);
    return (
        <div className=''>
            <div className='h-40 w-full px-5 py-5 flex gap-2 overflow-x-auto no-scrollbar'>
                {cards.map((card) => (
                         <Link
                             to={`/billboards/${card.id}`}
                             key={card.id}
                             className={`h-full w-[30%] min-w-[30%] bg-[${card.background_color}] rounded-2xl flex justify-center items-center flex-col`}>
                                 <h1 className={`text-sm px-2 mt-2 font-bold text-[${card.text_color}]`}>{card.name}</h1>
                                 <img src={girl} alt="" />            
                        </Link>
                 ))}
                {/* <div className='h-full w-[30%] min-w-[30%] bg-[#FBF19A] rounded-2xl'></div> */}
            </div>
            <main className='px-5 py-5'>
                <div className='h-60 w-full bg-[#616367] opacity-70 rounded-2xl flex justify-center items-center'>
                    <h1 className='text-2xl text-white'>ИГРАТЬ</h1>
                </div>
            </main>
            <div className='flex justify-center items-center py-2 px-5 h-60 w-full gap-4'>
                <div className='flex flex-col w-[48%] h-full justify-between'>
                    <div className='bg-[#D9D9D9] h-[100px] bg-opacity-30 rounded-2xl px-5 py-4 flex flex-col justify-between'>
                        <div className="flex justify-between items-start text-white">
                            <h1 className="">ЗАПИСАТЬСЯ НА ИГРУ</h1>
                            <MdKeyboardArrowRight className="text-3xl"/>
                        </div>
                        <h2 className="text-[6px] text-[#C0C0C0]">БЛИЖАЙЩАЯ ИГРА ВО ВТОРНИК</h2>
                    </div>
                    <div className='bg-[#D9D9D9] h-[100px] bg-opacity-30 rounded-2xl px-5 py-4 flex flex-col justify-between'>
                        <div className="flex justify-between items-start text-white">
                            <h1 className="">С ДРУЗЬЯМИ ДЕШЕВЛЕ</h1>
                            <MdKeyboardArrowRight className="text-3xl"/>
                        </div>
                        <h2 className="text-[6px] w-[100px] text-[#C0C0C0]">ДАРИММ ПО 500- ТЕБЕ И ПРЕВЕДЕННОМУ ДРУГУ</h2>
                    </div>
                </div>
                <div className='h-full bg-[#D9D9D9] bg-opacity-30 w-[50%] rounded-2xl px-5 py-5 flex flex-col justify-between'>
                    <img src={card} className="w-full mx-auto"/>
                    <div className="text-white mt-5 flex justify-between items-center">
                        <div>
                            <h1 className=''>БАЛЛЫ</h1>
                            <h1>1000</h1>
                        </div>
                        <div className="w-10 h-10 bg-[#979191] flex items-center rounded-full">
                            <FaArrowRight className="mx-auto"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
