import { Link } from "react-router-dom";
import { RiHome6Line } from "react-icons/ri";
import { IoNotificationsOutline } from "react-icons/io5";
import { HiOutlineUser } from "react-icons/hi2";
import { CiBookmarkMinus } from "react-icons/ci";
const Footer = () => {
    return (
        <footer className='fixed bottom-0 h-[10vh] bg-[#282A2F] w-full rounded-t-2xl flex items-center justify-between px-10 text-3xl text-white'>
            <Link to={'/'}>
                <RiHome6Line />
            </Link>
            <Link to={'/shop'}>
                <CiBookmarkMinus className="font-bold"/>
            </Link>
            <Link to={'/play'}>
                <IoNotificationsOutline />
            </Link>
            <Link to={'/product'}>
                <HiOutlineUser />
            </Link>
        </footer>
    );
};

export default Footer;