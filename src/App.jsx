import { useEffect } from 'react';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import Home from './pages/Home';
import { Layout } from './pages/Layout';
import { PROTECTED_ROUTES, PROTECTED_ROUTES_ARRAY } from './routes';

const isAuthorized = () => {
  // check: if user exist?
  return false;
};

const App = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const hasUser = isAuthorized();

  useEffect(() => {
    if (
      !hasUser &&
      PROTECTED_ROUTES_ARRAY.some((route) => route.path === pathname)
    ) {
      navigate('/');
    } else if (pathname === '/' && hasUser) {
      navigate(PROTECTED_ROUTES.dashboard.path);
    }
  }, [hasUser, navigate, pathname]);

  return (
    <Routes>
      {hasUser ? (
        <Route path='/' element={<Layout />}>
          {PROTECTED_ROUTES_ARRAY.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              element={route.component}
            />
          ))}
        </Route>
      ) : (
        <Route path='/' element={<Home />} />
      )}
    </Routes>
  );
};

export default App;
