import { useSelector, useDispatch } from 'react-redux';
import { favorite } from '../../slices/films.slice';
import Spinner from '../../components/Spinner/Spinner';
import MovieNotFound from '../../components/MovieNotFound/MovieNotFound';
import { TypeDispatch, TypeRootState } from '../../store/store';
import Film from '../../components/Film/Film';
import './Films.css';

const Films = () => {
   const films = useSelector((s: TypeRootState) => s.films.all); // все фильмы
   const error = useSelector((s: TypeRootState) => s.films.error); // состояние ошибки
   const load = useSelector((s: TypeRootState) => s.films.loading); // состояние загрузки
   const dispatch = useDispatch<TypeDispatch>();

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
