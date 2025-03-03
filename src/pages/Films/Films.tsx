import { useSelector, useDispatch } from 'react-redux';
import { favorite } from '../../slices/films.slice';
import { TypeDispatch, TypeRootState } from '../../store/store';
import Spinner from '../../components/Spinner/Spinner';
import MovieNotFound from '../../components/MovieNotFound/MovieNotFound';
import Film from '../../components/Film/Film';

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
         ) : (
            films
               .flat()
               .map((f) => (
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
