import React from "react";
import { CiBookmarkMinus } from "react-icons/ci";
import { FaArrowLeft } from "react-icons/fa6";
import { Link } from "react-router-dom";

export default function Details() {
  return (
    <div className="h-[100vh] text-white">
      <div className="h-1/2 bg-black">
        <Link to='/shop' className="absolute top-7 left-7 w-12 h-12 bg-gradient-to-r from-[#3E424B] to-[#232529] rounded-2xl flex items-center">
          <FaArrowLeft className="text-xl mx-auto"/>
        </Link>
      </div>
      <div className="h-1/2 rounded-2xl">
        <div className="p-7 flex flex-col gap-4">
          <h1 className="text-2xl">SONY 200mm Zoom </h1>
          <h1 className="text-2xl">$6000</h1>
          <p className="text-2xl">4.5 (500 reviews)</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis
            tellus, est lacus arcu ut ac in fermentum. Sit eget proin nunc felis
            quam rutrum metus. Et lacus, maecenas vel et arcu ut adipiscing
            morbi eget. At arcu varius ullamcorper eu varius. Et lacus, maecenas
            vel et arcu ut adipiscing morbi eget.{" "}
          </p>
        </div>
      </div>
      <div className="absolute bottom-5 px-5 flex justify-between w-full">
        <button className="w-20 h-20 bg-gradient-to-r from-[#3E424B] to-[#232529] rounded-2xl"><CiBookmarkMinus className="text-3xl mx-auto"/></button>
        <button className="w-[70vw] h-20 bg-gradient-to-b from-[#3E424B] to-[#232529] rounded-2xl text-2xl">Add to bag</button>
      </div>
    </div>
  );
}
