function MoviesCard({ link, title }) {
  return (
    <article className='card'>
      <img src={link} className='card__image' alt={title} />
      <div className='card-group'>
        <h2 className='card__title'>{title}</h2>
        <button
          type='button'
          className='card__button card__like-button_active'
        ></button>
      </div>
      <div className='section__line section__line_color_grey'></div>
      <p className='card__duration'>1ч42м</p>
    </article>
  );
}

export default MoviesCard;
