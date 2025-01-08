 import { AiOutlineShopping } from "react-icons/ai";
 const Header = () => {
    return (
        <header className="flex justify-between items-center h-[10vh] px-5">
        <div className='flex items-center gap-2 h-full'>
            <div className='w-[50px] h-[50px] bg-white rounded-full'></div>
            <div>
                <h1 className='text-white text-xl font-bold'>ЭММА</h1>
                <h4 className='bg-white text-sm px-1 rounded-lg'>НОВИЧОК</h4>
            </div>
        </div>
        <div>
            <AiOutlineShopping className='text-white text-4xl' />
        </div>
    </header>
    );
 }
 export default Header;