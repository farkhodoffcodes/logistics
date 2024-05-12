import { Link } from 'react-router-dom';
import { logo } from '../../assets/images';
// import AdminIcon from '../../assets/icons/admin.png';
import styled from 'styled-components';
import { PROTECTED_ROUTES_ARRAY } from '../../routes';

const Navbar = () => {
  return (
    <>
      <Container>
        <div className='nav'>
          <img
            className='w-auto h-10 lg:block sm:hidden'
            src={logo}
            alt='logo'
          />
          {PROTECTED_ROUTES_ARRAY.map((navItem) => (
            <Link key={navItem.path} to={navItem.path}>
              {navItem.title}
            </Link>
          ))}
          <button>
            admin
            {/* <img src={AdminIcon} alt='admin' /> */}
          </button>
          <select className='uppercase outline-none shadow-sm text-xl py-2 px-6 font-bold rounded-full'>
            <option value='eng'>Eng</option>
            <option value='ru'>Rus</option>
          </select>
        </div>
      </Container>
    </>
  );
};

const Container = styled.div`
  max-width: 1320px;
  margin: 0 auto;

  a {
    text-decoration: none;
    color: #000;
  }
  .nav {
    display: flex;
    justify-content: space-between;
    padding: 20px 0px;
  }
  .nav a:hover {
    color: red;
    border-bottom: 1px solid red;
    transition-duration: 0.3s;
  }
`;

export default Navbar;
