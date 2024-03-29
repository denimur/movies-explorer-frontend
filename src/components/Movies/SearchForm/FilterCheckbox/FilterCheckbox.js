function FilterCheckbox({ onChangeCheckbox, isMovieShort }) {
  function handleChangeCheckbox(e) {
    onChangeCheckbox(e);
  }

  return (
    <label htmlFor='short-film' className='movie-filter movie-filter__label'>
      <input
        type='checkbox'
        className='movie-filter__checkbox'
        id='short-film'
        name='checkbox'
        checked={isMovieShort}
        onChange={handleChangeCheckbox}
      />
      <span className='movie-filter__pseudo-checkbox'></span>
      <span className='movie-filter__text'>Короткометражки</span>
    </label>
  );
}

export default FilterCheckbox;
