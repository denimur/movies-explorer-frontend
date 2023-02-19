import SearchForm from './SearchForm/SearchForm';
import MoviesCardList from './MoviesCardList/MoviesCardList';
import More from './More/More';
import { useEffect, useState } from 'react';

function Movies({ setIsLoggedIn, setWithFooter, movies }) {
  const [count, setCount] = useState(0);
  const [cards, setCards] = useState([]);

  function handleLoadMore() {
    setCards([...cards, ...movies.slice(count, count + 4)]);
    setCount((count) => count + 4);
  }

  useEffect(() => {
    setIsLoggedIn(true);
    setWithFooter(true);
  }, [setIsLoggedIn, setWithFooter]);

  useEffect(() => {
    setCards([...movies.slice(count, count + 16)]);
    setCount((count) => count + 16);
  }, [count, movies]);

  return (
    <main className='movies'>
      <SearchForm />
      <MoviesCardList cards={cards} />
      <More onLoadMore={handleLoadMore} />
    </main>
  );
}

export default Movies;
