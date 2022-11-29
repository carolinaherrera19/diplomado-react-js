import { useLocation, useRoutes } from 'react-router-dom';
import Curso from '../pages/curso';

const Routes = () => {
  useLocation();
  let routes = useRoutes([
    {
      path: '/',
      children: [{ path: ':cursoSlug', element: <Curso /> }]
    }
  ]);
  return routes;
};

export default Routes;
