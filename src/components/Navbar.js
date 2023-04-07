import { NavLink } from 'react-router-dom';

const links = [
  { path: '/', text: 'Books' },
  { path: 'categories', text: 'Categories' },
];

const Navbar = () => (
  <nav className="flex items-center grow">
    <ul className="flex items-center justify-start gap-4">
      {links.map((link) => (
        <li key={link.text} className={`${(link.text === 'Books') ? 'text-[#121212]' : 'text-[#121212]/50'} text-sm tracking-widest`}>
          <NavLink to={link.path}>{link.text}</NavLink>
        </li>
      ))}
    </ul>
  </nav>
);

export default Navbar;
