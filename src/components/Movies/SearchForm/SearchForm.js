import FilterCheckbox from './FilterCheckbox/FilterCheckbox';
import SubmitButton from './SubmitButton/SubmitButton';

function SearchForm() {
  return (
    <section className='search'>
      <div className='search__container'>
        <form className='search-form'>
          <input
            type='text'
            className='search-form__item'
            id='movie-search'
            name='movie-search'
            placeholder='Фильм'
            required
          />
          <SubmitButton />
        </form>
        <FilterCheckbox />
      </div>
      <div className='section__line section__line_color_grey'></div>
    </section>
  );
}

export default SearchForm;
