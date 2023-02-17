import SearchForm from './SearchForm/SearchForm';
import MoviesCardList from './MoviesCardList/MoviesCardList';
import More from './More/More';
import { useEffect } from 'react';

function Movies({ setIsLoggedIn, setWithFooter }) {
  useEffect(() => {
    setIsLoggedIn(true);
    setWithFooter(true);
  }, [setIsLoggedIn, setWithFooter]);
  return (
    <main className='movies'>
      <SearchForm />
      <MoviesCardList />
      <More />
    </main>
  );
}

export default Movies;
