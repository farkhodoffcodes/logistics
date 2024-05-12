import { logo } from '../../assets/images';
import { Link, NavLink } from 'react-router-dom';
import { useState } from 'react';
import './header.css';

const navItems = [
  {
    label: 'Home',
    route: '#home',
  },
  {
    label: 'About',
    route: '#about',
  },
  {
    label: 'Services',
    route: '#services',
  },
  {
    label: 'Gallery',
    route: '#gallery',
  },
];

const Header = () => {
  const [toggle, setToggle] = useState(false);

  const toggleFuc = () => setToggle(!toggle);
  return (
    <header className='flex top-5 z-50 justify-between w-full pr-10 items-center fixed py-4 bg-white max-sm:fixed max-sm:full'>
      <div className='flex gap-5 ml-28'>
        <img className='w-auto h-10 max-sm:hidden' src={logo} alt='logo' />

        <ul className='header flex gap-5 items-center max-sm:hidden '>
          {navItems.map((item) => (
            <li key={item.label}>
              <NavLink className='py-2 px-3' to={item.route}>
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
      <div className='flex items-center justify-center gap-5 max-sm:absolute max-sm:ml-5'>
        <i onClick={toggleFuc} className={`fa-solid fa-bars sm:hidden max-sm:relative`}></i>
        <Link
          className='flex items-center justify-center bg-[#b91e22] font-bold py-2
           text-white px-8 rounded-full gap-2 max-sm:absolute max-sm:h-10 max-sm:ml-80'
          to={'/login'}
        >
          <span className='text-xl max-sm:hidden'>Log In</span>
          <i className='fa-solid fa-arrow-right-to-bracket fa-2xl font-black'></i>
        </Link>
        <nav className={toggle ? 'block' : 'hidden'}>
          <div className='max-sm:mt-10'>
            <i onClick={toggleFuc} className='fa-solid fa-xmark sm:hidden max-sm:ml-20'></i>
            <ul className='max-sm:absolute max-sm:block max-sm:bg-gray-200 max-sm:rounded'>
              {navItems.map((item) => (
                <li key={item.label}>
                  <NavLink className='py-2 px-3' to={item.route}>
                    {item.label}
                  </NavLink>
                </li>
                ))}
              </ul>
          </div>
        </nav>
        <select
          className='uppercase outline-none shadow-sm text-xl py-2 px-6 font-bold 
        rounded-full max-sm:relative max-sm:mr-80 '
        >
          <option value='eng'>Eng</option>
          <option value='ru'>Rus</option>
        </select>
      </div>
    </header>
  );
};

export default Header;
