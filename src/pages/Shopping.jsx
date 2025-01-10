import React from 'react'
import card from '../assets/Card.png'
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
export default function Shopping() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
      // Загружаем данные с API
      fetch("http://localhost:8000/product/?skip=0&limit=10")
          .then((response) => response.json())
          .then((data) => setProducts(data))
          .catch((error) => console.error("Error fetching cards:", error));
          console.log(products);
  }, []);
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
         {products.map((product) => (
                         <Link
                             to={`/product/${product.id}`}
                             key={product.id}
                             className={`bg-gradient-to-l from-[#3E424B] to-[#363941] w-auto h-60 rounded-2xl text-center flex flex-col`}>
                                 <img src={product.image} className='h-[200px] w-[200px]'/>
                                 <h1 className={`text-sm px-2 mt-2 font-bold text-white`}>{product.name}</h1>           
                        </Link>
                 ))}
            {/* <div className="bg-gradient-to-l from-[#3E424B] to-[#363941] w-auto h-60 rounded-2xl"> */}

            {/* </div> */}
         </div>
    </div>
  )
}
