import { formatTime } from '../../../utils/Helper';

function MoviesCard({ movie, onDeleteMovie }) {
  const { image, nameRU, duration, trailerLink } = movie;

  function handleDeleteMovie() {
    onDeleteMovie(movie._id);
  }
  return (
    <article className='card'>
      <a
        className='card__link'
        href={trailerLink}
        target='_blank'
        rel='noreferrer'
        title='watch the trailer on youtube'
      >
        <img src={image} className='card__image' alt={nameRU} />
      </a>
      <div className='card-group'>
        <h2 className='card__title'>{nameRU}</h2>
        <button
          type='button'
          className='card__button card__delete-button'
          onClick={handleDeleteMovie}
        ></button>
      </div>
      <div className='section-line section-line_color_grey'></div>
      <p className='card__duration'>{formatTime(duration)}</p>
    </article>
  );
}

export default MoviesCard;
