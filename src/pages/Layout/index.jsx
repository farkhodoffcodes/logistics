import { Outlet } from 'react-router-dom';
import Navbar from '../../components/Navbar/index';
import './layout.css';

export const Layout = () => {
  return (
    <div className='layout'>
      <header>
        <Navbar />
      </header>
      <main>
        <Outlet />
      </main>
      <footer>Footer</footer>
    </div>
  );
};
