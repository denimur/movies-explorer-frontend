import FilterCheckbox from './FilterCheckbox/FilterCheckbox';
import SubmitButton from './SubmitButton/SubmitButton';

function SearchForm({
  keyword,
  onChangeKeyword,
  onSubmitForm,
  isMovieShort,
  onChangeCheckbox,
  isKeywordTooltipOpened,
}) {
  return (
    <section className='search'>
      <div className='search__container'>
        <form className='search-form' onSubmit={onSubmitForm} noValidate>
          <input
            type='text'
            className='search-form__item'
            id='movie-search'
            name='movie-search'
            value={keyword || ''}
            onChange={onChangeKeyword}
            placeholder='Фильм'
            required
          />
          <SubmitButton />
          <span
            className={`search-form__error ${
              isKeywordTooltipOpened ? 'search-form__error_visible' : ''
            }`}
          >
            Нужно ввести ключевое слово
          </span>
        </form>
        <FilterCheckbox
          onChangeCheckbox={onChangeCheckbox}
          isMovieShort={isMovieShort}
        />
      </div>
      <div className='section-line section-line_color_grey'></div>
    </section>
  );
}

export default SearchForm;
