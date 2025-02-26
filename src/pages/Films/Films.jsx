import { useSelector, useDispatch } from 'react-redux';
import { favorite } from '../../slices/films.slice';
import Spinner from '../../components/Spinner/Spinner';
import MovieNotFound from '../../components/MovieNotFound/MovieNotFound';
import Film from '../../components/Film/Film';
import './Films.css';

const Films = () => {
   const films = useSelector((s) => s.films.all); // все фильмы
   const error = useSelector((s) => s.films.error); // состояние ошибки
   const load = useSelector((s) => s.films.loading); // состояние загрузки
   const dispatch = useDispatch();

   return (
      <section className='films-container'>
         {load && <Spinner />}
         {error ? (
            <MovieNotFound />
         ) : Array.isArray(films[0]) ? (
            films[0].map((f) => (
               <Film
                  key={f.imdbID}
                  label='To favorite'
                  onClick={() => dispatch(favorite(f))}
                  {...f}
               />
            ))
         ) : (
            films.map((f) => (
               <Film
                  key={f.imdbID}
                  label='To favorite'
                  onClick={() => dispatch(favorite(f))}
                  {...f}
               />
            ))
         )}
      </section>
   );
};

export default Films;
