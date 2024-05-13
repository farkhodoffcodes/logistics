import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import AdminIcon from '../../assets/icons/admin.png';
import { logo } from '../../assets/images';
import { PROTECTED_ROUTES_ARRAY } from '../../routes';
import { useState } from 'react';

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [lang, setLang] = useState(i18n.language);

  const onChangeLanguage = (e) => {
    const value = e.target.value;
    setLang(value);
    i18n.changeLanguage(value);
  };
  const [toggle, setToggle] = useState(false);

  const toggleFuc = () => setToggle(!toggle);
  return (
    <>
      <Container>
        <div className='nav max-sm:absolute'>
          <img
            className='w-auto h-10 lg:block max-sm:hidden'
            src={logo}
            alt='logo'
          />
          
          <i onClick={toggleFuc} className={`fa-solid fa-bars sm:hidden max-sm:absolute max-sm:ml-[10px]`}></i>
         {PROTECTED_ROUTES_ARRAY.map((navItem) => (
            <Link key={navItem.path} to={navItem.path} className='max-sm:hidden'>
              {t(`navbar.${navItem.title.toLowerCase()}`)}
            </Link>
          ))}
        </div>
        <nav className={toggle ? 'block' : 'hidden'}>
        <div className='max-sm:pt-[120px] '>
        {PROTECTED_ROUTES_ARRAY.map((navItem) => (
            <Link key={navItem.path} to={navItem.path} className='max-sm:relative max-sm:block max-sm:pl-[30px]'>
              {t(`navbar.${navItem.title.toLowerCase()}`)}
            </Link>
          ))}
        </div>
        </nav>
        
        <div className='lang'>
          <button className='max-sm:pl-[600px]'>
            <img src={AdminIcon} alt='admin' />
          </button>
          <select
            onChange={onChangeLanguage}
            value={lang}
            className='uppercase outline-none shadow-sm text-xl py-2 px-6 font-bold rounded-full max-sm:absolute max-sm:ml-[80px]'
          >
            <option value='en'>Eng</option>
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
  display: flex;
  justify-content: space-between;
  align-items: center;

  a {
    text-decoration: none;
    color: dimgray;
  }
  .nav {
    display: flex;
    align-items: center;
    gap: 40px;
    padding: 20px 0px;
  }
  .nav a:hover {
    color: red;
    border-bottom: 1px solid red;
    transition-duration: 0.3s;
  }
  .lang {
    display: flex;
    gap: 30px;
    select {
      font-size: 16px;
    }
    img {
      width: 40px;
      height: 40px;
      border-radius: 50%;
    }
  }
`;

export default Navbar;
