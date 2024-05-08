import { Link } from 'react-router-dom';
import { ROUTES_ARRAY } from '../../routes';

const Navbar = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-around',
        backgroundColor: 'yellow',
      }}
    >
      <span>Logo</span>
      {ROUTES_ARRAY.map((navItem) => (
        <Link key={navItem.path} to={navItem.path}>
          {navItem.title}
        </Link>
      ))}
      <span>smth</span>
    </div>
  );
};

export default Navbar;
