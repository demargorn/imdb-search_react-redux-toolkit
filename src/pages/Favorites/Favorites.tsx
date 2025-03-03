import { useSelector, useDispatch } from 'react-redux';
import { remove } from '../../slices/films.slice';
import { TypeRootState, TypeDispatch } from '../../store/store';
import Film from '../../components/Film/Film';
import '../../components/Film/Film.css';

const Favorites = () => {
   const favorites = useSelector((s: TypeRootState) => s.films.favorite);
   const dispatch = useDispatch<TypeDispatch>();

   return (
      <>
         <h3 className='h3 favorite-title'>Your favorite movies</h3>
         {!favorites.length && (
            <span className='h5 favorite-empty'>Вы ничего не добавили в избранное</span>
         )}
         {favorites.map((f) => (
            <Film key={f.imdbID} label='remove' onClick={() => dispatch(remove(f))} {...f} />
         ))}
      </>
   );
};

export default Favorites;
