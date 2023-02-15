import MoviesCardList from './MoviesCardList/MoviesCardList';
import { useEffect } from 'react';
import SavedDevider from './SavedDevider/SavedDevider';
import SearchForm from '../Movies/SearchForm/SearchForm';

function SavedMovies({ setIsLoggedIn, setWithFooter }) {
  useEffect(() => {
    setIsLoggedIn(true);
    setWithFooter(true);
  }, [setIsLoggedIn, setWithFooter]);
  return (
    <section className='saved-movies'>
      <SearchForm />
      <MoviesCardList />
      <SavedDevider />
    </section>
  );
}

export default SavedMovies;
