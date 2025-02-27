import { FormEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { add, loading, isError, clear } from '../../slices/films.slice';
import { API, KEY } from '../../helpers/API';
import { TypeDispatch } from '../../store/store';
import Films from '../Films/Films';
import './SearchByID.css';

const SearchByID = () => {
   const [id, setId] = useState<string>(''); // id фильма
   const navigate = useNavigate();
   const dispatch = useDispatch<TypeDispatch>();

   const handleFormReset = () => setId('');

   const handleFormSubmit = async (e: FormEvent) => {
      e.preventDefault();

      dispatch(isError(false)); // сброс ошибок
      dispatch(clear()); // очищаем стэйт перед следующим запросом
      dispatch(loading(true)); // начали загрузку

      try {
         const response = await fetch(`${API}?apikey=${KEY}&i=${id}`);

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
            dispatch(add(data));
         }
      } catch (error) {
         console.log(error);
      }

      handleFormReset(); // очищаем форму после запроса
   };

   return (
      <>
         <form className='form-search-by-id' onSubmit={handleFormSubmit}>
            <header className='form-header'>
               <h3 className='h3 form-title'>By ID</h3>
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
                     ID:
                  </label>
                  <input
                     id='title'
                     type='text'
                     title='введите ID фильма'
                     value={id}
                     onChange={(e) => setId(e.target.value)}
                     className='form-control form-id-input'
                     placeholder="film's ID"
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

export default SearchByID;
