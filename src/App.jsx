import { useEffect } from 'react';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { Layout } from './pages/Layout';
import { ROUTES, ROUTES_ARRAY } from './routes';

const App = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (pathname === '/') {
      navigate(ROUTES.dashboard.path);
    }
  }, [navigate, pathname]);

  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        {ROUTES_ARRAY.map((route) => (
          <Route key={route.path} path={route.path} element={route.component} />
        ))}
      </Route>
    </Routes>
  );
};

export default App;
