import { moviesApi } from '../../../utils/MoviesApi';

function MoviesCard({ image, title, duration, trailerLink }) {
  const formatDuration =
    duration >= 120
      ? `2ч ${duration - 120}м`
      : duration >= 60
      ? `1ч ${duration - 60}м`
      : `${duration} мин`;
  return (
    <article className='card'>
      <a
        className='card__link'
        href={trailerLink}
        target='_blank'
        rel='noreferrer'
      >
        <img
          src={`${moviesApi._url}${image.url}`}
          className='card__image'
          alt={title}
        />
      </a>
      <div className='card-group'>
        <h2 className='card__title'>{title}</h2>
        <button
          type='button'
          className='card__button card__like-button_active'
        ></button>
      </div>
      <div className='section-line section-line_color_grey'></div>
      <p className='card__duration'>{formatDuration}</p>
    </article>
  );
}

export default MoviesCard;
