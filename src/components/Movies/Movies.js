import SearchForm from './SearchForm/SearchForm';
import MoviesCardList from './MoviesCardList/MoviesCardList';
import More from './More/More';
import { useEffect } from 'react';
import Preloader from './Preloader/Preloader';
import ServerErrorTooltip from '../ServerErrorTooltip/ServerErrorTooltip';
import NothingFoundTooltip from '../NothingFoundTooltip/NothingFoundTooltip';

function Movies({
  setWithHeader,
  setWithFooter,
  keyword,
  setKeyword,
  count,
  movies,
  setMovies,
  isMovieShort,
  setIsMovieShort,
  onSumbitSearchForm,
  onLikeMovie,
  onDeleteMovie,
  isKeywordTooltipOpened,
  isPreloaderRender,
  isNothingFound,
  setIsNothingFound,
  isServerError,
  onLoadMore,
  isEmpty,
}) {
  useEffect(() => {
    setWithHeader(true);
    setWithFooter(true);
    const isShort = Boolean(JSON.parse(localStorage.getItem('isShort')));
    const keyword = localStorage.getItem('keyword');
    const movies = JSON.parse(localStorage.getItem('movies')) || [];

    setIsMovieShort(isShort);
    setKeyword(keyword);
    setMovies(movies.slice(0, count === 5 ? count : count * 4));
    if (keyword && movies.length === 0) setIsNothingFound(true);
  }, []);

  function handleChangeKeyWord(e) {
    setKeyword(e.target.value);
  }

  function handleChangeCheckbox(e) {
    setIsMovieShort(e.target.checked);
  }

  return (
    <main className='movies'>
      <SearchForm
        keyword={keyword}
        setKeyword={setKeyword}
        onChangeKeyword={handleChangeKeyWord}
        onSubmitForm={onSumbitSearchForm}
        isKeywordTooltipOpened={isKeywordTooltipOpened}
        isMovieShort={isMovieShort}
        onChangeCheckbox={handleChangeCheckbox}
      />
      {isServerError && <ServerErrorTooltip />}
      {isPreloaderRender && <Preloader />}
      {isNothingFound && <NothingFoundTooltip />}
      <MoviesCardList
        movies={movies}
        onLikeMovie={onLikeMovie}
        onDeleteMovie={onDeleteMovie}
        isNothingFound={isNothingFound}
      />
      <More isEmpty={isEmpty} onLoadMore={onLoadMore} />
    </main>
  );
}

export default Movies;
