function MoviesCard({ movie }) {
  return (
    <article className='card'>
      <img src={movie.link} className='card__image' alt='скриншот фильма' />
      <div className='card-group'>
        <h2 className='card__title'>{movie.title}</h2>
        <button
          type='button'
          className='card__button card__delete-button'
        ></button>
      </div>
      <div className='section-line section-line_color_grey'></div>
      <p className='card__duration'>1ч42м</p>
    </article>
  );
}

export default MoviesCard;
