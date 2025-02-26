import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { add, loading, isError } from '../../slices/films.slice';
import { API, KEY } from '../../helpers/API';
import Films from '../../pages/Films/Films';
import './SearchByTitle.css';

const SearchByTitle = () => {
   const [title, setTitle] = useState(''); // название фильма

   const dispatch = useDispatch();
   const navigate = useNavigate();

   const handleFormReset = () => setTitle('');

   const handleFormSubmit = async (e) => {
      e.preventDefault();

      dispatch(isError(false)); // сброс ошибок
      dispatch(loading(true)); // начали загрузку

      try {
         const response = await fetch(`${API}?apikey=${KEY}&s=${title}`);

         if (!response.ok) {
            dispatch(loading(false)); // закончили загрузку в случае ошибки
            throw new Error(response.statusText);
         }

         const data = await response.json();

         if (data.Error) {
            dispatch(isError(true));
            dispatch(loading(false)); // закончили загрузку в случае ошибки
         } else {
            dispatch(loading(false)); // закончили загрузку, тк получили даные
            dispatch(add(data.Search));
         }
      } catch (error) {
         console.log(error);
      }

      handleFormReset(); // очищаем форму после запроса
   };

   return (
      <>
         <form className='form-search-by-title' onSubmit={handleFormSubmit}>
            <header className='form-header'>
               <h3 className='h3 form-title'>By Title</h3>
               <button
                  type='button'
                  className='btn btn-danger btn-my-favorite'
                  onClick={() => navigate('/favorites')}
               >
                  My favorite
               </button>
            </header>
            <div className='input-container'>
               <div className='mb-3'>
                  <label htmlFor='title' className='form-label'>
                     Title:
                  </label>
                  <input
                     id='title'
                     type='text'
                     title='введите название фильма'
                     value={title}
                     onChange={(e) => setTitle(e.target.value)}
                     className='form-control form-text-input'
                     placeholder="film's title"
                     required
                  />
               </div>
               <div className='btn-container'>
                  <button type='submit' className='btn btn-primary button'>
                     Search
                  </button>
                  <button
                     type='button'
                     className='btn btn-secondary button'
                     onClick={handleFormReset}
                  >
                     Reset
                  </button>
               </div>
            </div>
         </form>
         <Films />
      </>
   );
};

export default SearchByTitle;
