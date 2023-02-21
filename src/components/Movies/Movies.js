import SearchForm from './SearchForm/SearchForm';
import MoviesCardList from './MoviesCardList/MoviesCardList';
import More from './More/More';
import { useEffect, useState } from 'react';
import { moviesApi } from '../../utils/MoviesApi';

function Movies({ setWithHeader, setWithFooter, isLoggedIn }) {
  const [count, setCount] = useState(16);
  const [movies, setMovies] = useState([]);
  const [cards, setCards] = useState([]);
  const notEmpty = cards.length < movies.length;
  console.log(cards.length < movies.length, cards.length, movies.length);
  console.log(movies);

  function handleLoadMore() {
    setCards([...cards, ...movies.slice(count, count + 4)]);
    setCount((count) => count + 4);
  }

  useEffect(() => {
    if (isLoggedIn) {
      moviesApi
        .getMovies()
        .then((movies) => {
          setMovies(movies.slice(0, 20));
          setCards(movies.slice(0, 16));
        })
        .catch((err) => console.log(err));
    }
  }, [isLoggedIn]);

  useEffect(() => {
    setWithHeader(true);
    setWithFooter(true);
  }, [setWithHeader, setWithFooter]);

  return (
    <main className='movies'>
      <SearchForm />
      <MoviesCardList cards={cards} />
      <More notEmpty={notEmpty} onLoadMore={handleLoadMore} />
    </main>
  );
}

export default Movies;
