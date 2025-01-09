import React, { useContext } from "react";
import { AiOutlineShopping } from "react-icons/ai";
import { UserContext } from "../contexts/UserContext";

const Header = () => {
  const { user } = useContext(UserContext);

  return (
    <header className="flex justify-between items-center h-[10vh] px-5 font-rostov">
      <div className='flex items-center gap-2 h-full'>
        <div className='w-[50px] h-[50px] bg-white rounded-full'></div>
        <div>
          <h1 className='text-white text-xl font-bold tracking-widest'>{user ? user.username : "НОВИЧОК"}</h1>
          <h4 className='bg-white text-sm px-1 rounded-lg tracking-widest'>
            НОВИЧОК
          </h4>
        </div>
      </div>
      <div>
        <AiOutlineShopping className='text-white text-4xl' />
      </div>
    </header>
  );
};

export default Header;
