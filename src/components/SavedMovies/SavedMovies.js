import MoviesCardList from './MoviesCardList/MoviesCardList';
import { useEffect, useState } from 'react';
import SavedDevider from './SavedDevider/SavedDevider';
import SearchForm from '../Movies/SearchForm/SearchForm';
import { getFilteredData } from '../../utils/Helper';
import NothingFoundTooltip from '../NothingFoundTooltip/NothingFoundTooltip';

function SavedMovies({
  setWithHeader,
  setWithFooter,
  savedMovies,
  setSavedMovies,
  onDeleteMovie,
}) {
  const [keyword, setKeyword] = useState('');
  const [isNothingFound, setIsNothingFound] = useState(false);
  const [isKeywordTooltipOpened, setIsKeywordTooltipOpened] = useState(false);
  const [isMovieShort, setIsMovieShort] = useState(false);

  useEffect(() => {
    setWithHeader(true);
    setWithFooter(true);
    const movies = JSON.parse(localStorage.getItem('saved-movies')) || [];
    const isShort = Boolean(
      JSON.parse(localStorage.getItem('isSavedMovieShort'))
    );
    setIsMovieShort(isShort);
    setSavedMovies(getFilteredData(movies, keyword, isShort));
  }, []);

  function handleChangeCheckbox(e) {
    const checked = e.target.checked;
    const savedMovies = JSON.parse(localStorage.getItem('saved-movies')) || [];
    setIsMovieShort(checked);
    localStorage.setItem('isSavedMovieShort', checked);
    const data = getFilteredData(savedMovies, keyword, checked);
    setSavedMovies(data);
    data.length === 0 ? setIsNothingFound(true) : setIsNothingFound(false);
  }

  function handleChangeKeyWord(e) {
    setKeyword(e.target.value);
  }

  function handleSubmitSearchForm(e) {
    e.preventDefault();
    const savedMovies = JSON.parse(localStorage.getItem('saved-movies')) || [];
    if (keyword) {
      setIsNothingFound(false);
      const data = getFilteredData(savedMovies, keyword, isMovieShort);
      data.length === 0 && setIsNothingFound(true);

      setSavedMovies(data);
    } else {
      setIsKeywordTooltipOpened(true);
      setTimeout(() => {
        setIsKeywordTooltipOpened(false);
      }, 2000);
    }
  }
  return (
    <section className='saved-movies'>
      <SearchForm
        onChangeCheckbox={handleChangeCheckbox}
        keyword={keyword}
        setKeyword={setKeyword}
        onChangeKeyword={handleChangeKeyWord}
        onSubmitForm={handleSubmitSearchForm}
        isKeywordTooltipOpened={isKeywordTooltipOpened}
        isMovieShort={isMovieShort}
      />
      {isNothingFound && <NothingFoundTooltip />}
      <MoviesCardList movies={savedMovies} onDeleteMovie={onDeleteMovie} />
      <SavedDevider />
    </section>
  );
}

export default SavedMovies;
