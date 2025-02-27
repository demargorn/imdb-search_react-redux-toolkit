import { Outlet } from 'react-router';

const Layout = () => {
   return (
      <main className='container app-container'>
         <Outlet />
      </main>
   );
};

export default Layout;
