import { Outlet } from 'react-router-dom';
import { IoIosPerson } from 'react-icons/io';
import Navbar from './Navbar';

const Header = () => (
  <>
    <header className="w-full h-24 mb-9 py-6 px-24 flex items-center space-x-20 bg-white border-b-2 border-[#e8e8e8]">
      <span className="text-3xl font-bold text-[#0290ff]">Bookstore CMS</span>
      <Navbar />
      <div className="p-3 border-2 border-[#e8e8e8] rounded-full">
        <IoIosPerson className="w-5 h-5 text-[#0290ff]" />
      </div>
    </header>
    <Outlet />
  </>
);

export default Header;
