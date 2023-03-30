import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';

const Header = () => (
  <>
    <header>
      <span>Bookstore CMS</span>
      <Navbar />
    </header>
    <Outlet />
  </>
);

export default Header;
