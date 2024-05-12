import { useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Home from './pages/Home';
import { Layout } from './pages/Layout';
import Login from './pages/Login';
import { PROTECTED_ROUTES, PROTECTED_ROUTES_ARRAY } from './routes';

const App = () => {
  const navigate = useNavigate();
  const token = sessionStorage.getItem('token');
  const role = sessionStorage.getItem('role');
  const isAdmin = token && role === 'ROLE_ADMIN';

  useEffect(() => {
    if (isAdmin) {
      navigate(PROTECTED_ROUTES.dashboard.path);
    } else {
      navigate('/');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const AdminRoutes = () => (
    <Routes>
      <Route path='/' element={<Layout />}>
        {PROTECTED_ROUTES_ARRAY.map((route) => (
          <Route key={route.path} path={route.path} element={route.component} />
        ))}
      </Route>
    </Routes>
  );

  const CommonRoutes = () => (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
    </Routes>
  );

  return isAdmin ? <AdminRoutes /> : <CommonRoutes />;
};

export default App;
