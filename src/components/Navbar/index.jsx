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
              {t(`navbar.${navItem.title.toLowerCase()}`)}
            </Link>
          ))}
        </div>
        <div className='lang'>
          <button>
            <img src={AdminIcon} alt='admin' />
          </button>
          <select
            onChange={onChangeLanguage}
            value={lang}
            className='uppercase outline-none shadow-sm text-xl py-2 px-6 font-bold rounded-full'
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
