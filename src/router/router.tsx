import { createHashRouter } from 'react-router';
import Layout from '@/layouts/Layout';
import App from '@/components/App/App';
import SearchByTitle from '@/pages/SearchByTitle/SearchByTitle';
import SearchByID from '@/pages/SearchByID/SearchByID';
import Favorites from '@/pages/Favorites/Favorites';
import ViewFilm from '@/pages/ViewFilm/ViewFilm';

const router = createHashRouter([
   {
      path: '/',
      element: <Layout />,
      children: [
         {
            path: '/',
            element: <App />,
         },
         {
            path: '/search-by-title',
            element: <SearchByTitle />,
         },
         {
            path: '/search-by-id',
            element: <SearchByID />,
         },
         {
            path: '/favorites',
            element: <Favorites />,
         },
         {
            path: '/film/:id',
            element: <ViewFilm />,
         },
         {
            path: '*',
            element: <span className='h1'>Страница не найдена</span>,
         },
      ],
   },
]);

export default router;
