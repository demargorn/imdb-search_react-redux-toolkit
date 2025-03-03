import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { loading, isError } from '../../slices/films.slice';
import { favorite } from '../../slices/films.slice';
import { API, KEY } from '../../helpers/API';
import { TypeDispatch, TypeRootState } from '../../store/store';
import { TypeFilm } from '../../interfaces/film';
import Spinner from '../../components/Spinner/Spinner';
import Film from '../../components/Film/Film';

const ViewFilm = () => {
   const [film, setFilm] = useState<TypeFilm>();
   const error = useSelector((s: TypeRootState) => s.films.error); // состояние ошибки
   const load = useSelector((s: TypeRootState) => s.films.loading); // состояние загрузки
   const { id } = useParams();
   const dispatch = useDispatch<TypeDispatch>();

   useEffect(() => {
      (async () => {
         try {
            dispatch(loading(true)); // начали загрузку

            const response = await fetch(`${API}?apikey=${KEY}&i=${id}`);

            if (!response.ok) {
               dispatch(loading(false)); // закончили загрузку в случае ошибки
               throw new Error(response.statusText);
            }

            const data = await response.json();
            setFilm(data);
         } catch (error) {
            dispatch(isError(true));
            console.log(error);
         }
         dispatch(loading(false)); // закончили загрузку успешно
      })();
   }, [id, dispatch]);

   return (
      <>
         {load && <Spinner />}
         {error ? (
            <span className='h3'>Something wrong</span>
         ) : (
            <Film
               imdbID={film!.imdbID}
               label='To favorite'
               onClick={() => dispatch(favorite(film!))}
               {...film}
            />
         )}
      </>
   );
};

export default ViewFilm;
