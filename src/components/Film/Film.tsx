import { Link } from 'react-router';
import { TypeFilm } from '../../interfaces/film';
import { TypeButton } from '../../interfaces/button';
import './Film.css';

const Film = (props: TypeFilm & TypeButton) => {
   return (
      <article className='film'>
         <Link to={`/film/${props.imdbID}`}>
            <img src={props.Poster} alt='poster' className='film-poster' />
         </Link>
         <div className='film-info'>
            <Link to={`/film/${props.imdbID}`} className='h3 film-title'>
               {props.Title}
            </Link>
            {props.Year && <div className='film-about'>Год производства: {props.Year}</div>}
            {props.Type && <div className='film-about'>Тип: {props.Type}</div>}
            {props.Genre && <div className='film-about'>Жанр: {props.Genre}</div>}
            {props.Runtime && <div className='film-about'>Продолжительность: {props.Runtime}</div>}
            {props.Director && <div className='film-about'>Режииссер: {props.Director}</div>}
            {props.Actors && <div className='film-about'>Актеры: {props.Actors}</div>}
            {props.imdbRating && <div className='film-about'>Рейтинг: {props.imdbRating}</div>}
         </div>
         <button type='button' className='btn btn-danger btn-to-favorite' onClick={props.onClick}>
            {props.label}
         </button>
      </article>
   );
};

export default Film;
