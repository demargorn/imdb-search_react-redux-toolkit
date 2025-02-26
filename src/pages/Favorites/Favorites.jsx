import { useSelector, useDispatch } from 'react-redux';
import { remove } from '../../slices/films.slice';
import Film from '../../components/Film/Film';
import '../../components/Film/Film.css';
import './Favorites.css';

const Favorites = () => {
   const favorites = useSelector((s) => s.films.favorite);
   const dispatch = useDispatch();

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
