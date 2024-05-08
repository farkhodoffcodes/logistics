import { Cashier, Dashboard, Project, Users, Warehouse } from '../pages';

export const ROUTES = {
  dashboard: {
    path: '/dashboard',
    title: 'Dashboard',
    component: <Dashboard />,
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

export const ROUTES_ARRAY = Object.values(ROUTES);
