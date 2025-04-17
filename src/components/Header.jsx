import React from "react";

import { AiOutlineShopping } from "react-icons/ai";

import { useSelector } from "react-redux";

import { Link } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";
import { useContext } from "react";

const Header = () => {
  const { user } = useContext(UserContext);
  const cartItems = useSelector((state) => state.cart.items);
  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  ); // Считаем общее количество товаров

  return (
    <header className="flex justify-between items-center h-[10vh] px-5 font-rostov">
      <div className="flex items-center gap-2 h-full">
        <div className="w-[50px] h-[50px] bg-white rounded-full"></div>

        <div>
          <h1 className="text-white text-xl font-bold tracking-widest">
              {user ? user.username : "НОВИЧОК"}
          </h1>

          <h4 className="bg-white text-sm px-1 rounded-lg tracking-widest">
            НОВИЧОК
          </h4>
        </div>
      </div>

      <Link to="/cart" className="absolute right-12 top-6">
        <AiOutlineShopping className="text-white text-4xl" />

        {totalItems > 0 && (
          <span className="absolute -top-1 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
            {totalItems}
          </span>
        )}
      </Link>
    </header>
  );
};

export default Header;