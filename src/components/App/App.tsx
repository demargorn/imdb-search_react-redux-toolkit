import { Link } from 'react-router';
import './App.css';

const App = () => {
   return (
      <div className='container'>
         <h1 className='h1 main-title'>Films Library</h1>
         <div className='links'>
            <Link to='/search-by-title' className='h3 link-title'>
               Search by Title
            </Link>
            <Link to='/search-by-id' className='h3 link-title'>
               Search by ID
            </Link>
         </div>
      </div>
   );
};

export default App;
