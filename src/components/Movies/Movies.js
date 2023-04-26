import SearchForm from './SearchForm/SearchForm';
import MoviesCardList from './MoviesCardList/MoviesCardList';
import More from './More/More';
import { useEffect } from 'react';
import Preloader from './Preloader/Preloader';
import ServerErrorTooltip from '../ServerErrorTooltip/ServerErrorTooltip';
import NothingFoundTooltip from '../NothingFoundTooltip/NothingFoundTooltip';
import { getFilteredData } from '../../utils/Helper';
import { NUMBER_OF_ROWS } from '../../utils/constants';

function Movies({
  setWithHeader,
  setWithFooter,
  keyword,
  setKeyword,
  cardsCount,
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
  onChangeCheckbox,
}) {
  useEffect(() => {
    setWithHeader(true);
    setWithFooter(true);
    const isShort = Boolean(JSON.parse(localStorage.getItem('isShort')));
    const keyword = localStorage.getItem('keyword');
    const movies = JSON.parse(localStorage.getItem('movies')) || [];
    const foundMovies = getFilteredData(movies, keyword, isShort);
    setIsMovieShort(isShort);
    setKeyword(keyword);
    setMovies(
      foundMovies.slice(
        0,
        cardsCount === 5 ? cardsCount : cardsCount * NUMBER_OF_ROWS
      )
    );
    if (keyword && movies.length === 0) setIsNothingFound(true);
  }, []);

  function handleChangeKeyWord(e) {
    setKeyword(e.target.value);
  }

  return (
    <section className='movies'>
      <SearchForm
        keyword={keyword}
        setKeyword={setKeyword}
        onChangeKeyword={handleChangeKeyWord}
        onSubmitForm={onSumbitSearchForm}
        isKeywordTooltipOpened={isKeywordTooltipOpened}
        isMovieShort={isMovieShort}
        onChangeCheckbox={onChangeCheckbox}
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
    </section>
  );
}

export default Movies;
