import React from "react";
import { useDispatch } from "react-redux";
// import { addToCart } from "../redux/slices/cartSlice";
import { addToCart } from "../redux/slices/cartSlice";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa6";
import { CiBookmarkMinus } from "react-icons/ci";

export default function Details() {
  const { id } = useParams();
  const [products, setProducts] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    fetch(`http://localhost:8000/product/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch card details");
        }
        return response.json();
      })
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, [id]);

  const handleAddToCart = () => {
    dispatch(addToCart(products));
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="h-auto text-white">
      <div className="h-1/2 bg-none">
        <img src={products.image} className="w-full h-full" alt="" />
        <Link to="/shop" className="fixed top-7 left-7 w-12 h-12 bg-gradient-to-r from-[#3E424B] to-[#232529] rounded-2xl flex items-center">
          <FaArrowLeft className="text-xl mx-auto" />
        </Link>
      </div>
      <div className="h-[100vh] rounded-2xl">
        <div className="p-7 flex flex-col gap-4">
          <h1 className="text-2xl">{products.name}</h1>
          <h1 className="text-2xl">{products.price} $</h1>
          <p>Осталось:{products.stock}</p>
          <p>В наличии: {products.is_available ? "Да" : "Нет"}</p>
          <p className="text-2xl">4.5 (500 reviews)</p>
          <p>{products.description}</p>
        </div>
      </div>
      <div className="fixed bottom-5 px-5 flex justify-between w-full">
        <button className="w-20 h-20 bg-gradient-to-r from-[#3E424B] to-[#232529] rounded-2xl">
          <CiBookmarkMinus className="text-3xl mx-auto" />
        </button>
        {/* <button
          className="w-[70vw] h-20 bg-gradient-to-b from-[#3E424B] to-[#232529] rounded-2xl text-2xl"
          onClick={handleAddToCart}
        >
          Add to bag
        </button> */}
        <button onClick={handleAddToCart} className="w-[70vw] h-20 bg-gradient-to-b from-[#3E424B] to-[#232529] rounded-2xl text-2xl">
        Add to Cart
      </button>
      </div>
    </div>
  );
}
