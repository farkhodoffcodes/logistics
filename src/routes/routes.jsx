import { Cashier, Project, Users, Warehouse } from '../pages';
import Admin from '../pages/role/admin';

export const PROTECTED_ROUTES = {
  dashboard: {
    path: '/dashboard',
    title: 'Dashboard',
    component: <Admin />,
  },
  project: {
    path: '/project',
    title: 'Project',
    component: <Project />,
  },
  warehouse: {
    path: '/warehouse',
    title: 'Warehouse',
    component: <Warehouse />,
  },
  users: {
    path: '/users',
    title: 'Users',
    component: <Users />,
  },
  cashier: {
    path: '/cashier',
    title: 'Cashier',
    component: <Cashier />,
  },
};

export const PROTECTED_ROUTES_ARRAY = Object.values(PROTECTED_ROUTES);
