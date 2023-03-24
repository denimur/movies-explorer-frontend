import { moviesApi } from '../../../utils/MoviesApi';
import { formatTime } from '../../../utils/Helper';

function MoviesCard({ movie, onLikeMovie, onDeleteMovie }) {
  const BASE_URL = moviesApi._url;
  const { image, duration, nameRU: title, trailerLink, trailer, owner } = movie;
  const isLiked = owner ? true : false;
  const btnClassName = `card__button card__like-button${
    isLiked ? '_active' : ''
  }`;

  function handleCardLike() {
    isLiked ? onDeleteMovie(movie._id) : onLikeMovie(movie);
  }

  return (
    <article className='card'>
      <a
        className='card__link'
        href={trailerLink || trailer}
        target='_blank'
        rel='noreferrer'
        title='watch the trailer on youtube'
      >
        <img
          src={typeof image === 'object' ? `${BASE_URL}${image.url}` : image}
          className='card__image'
          alt={title}
        />
      </a>
      <div className='card-group'>
        <h2 className='card__title'>{title}</h2>
        <button
          type='button'
          onClick={handleCardLike}
          className={btnClassName}
        ></button>
      </div>
      <div className='section-line section-line_color_grey'></div>
      <p className='card__duration'>{formatTime(duration)}</p>
    </article>
  );
}

export default MoviesCard;
