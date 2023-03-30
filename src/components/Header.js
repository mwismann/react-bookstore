import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';

const Header = () => (
  <>
    <header>
      <div>
        <p>Bookstore CMS</p>
      </div>
      <Navbar />
    </header>
    <Outlet />
  </>
);

export default Header;
