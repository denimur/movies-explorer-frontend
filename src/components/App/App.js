import React, { useState, useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import ProtectedRouteElement from '../ProtectedRoute/ProtectedRoute';
import Movies from './../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from './../Profile/Profile';
import Login from './../Login/Login';
import Header from '../Header/Header';
import Register from './../Register/Register';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import NotFound from '../NotFound/NotFound';
import ProfileNavTab from '../ProfileNavTab/ProfileNavTab';
import MovieNavTab from '../MovieNavTab/MovieNavTab';
import Menu from '../Menu/Menu';
import Navigation from '../Navigation/Navigation';
import AuthNavTab from '../AuthNavTab/AuthNavTab';
import { CurrentUserContext } from './../../contexts/CurrentUserContext';
import { moviesApi } from '../../utils/MoviesApi';
import * as mainApi from '../../utils/MainApi';
import { getAuthMessage } from '../../utils/ErrorMessages';
import Tooltip from '../Tooltip/Tooltip';
import {
  countByWindowWidth,
  setLocalStorage,
  getFilteredData,
} from '../../utils/Helper';

function App() {
  const BASE_URL = moviesApi._url;
  const [isFailTooltipOpen, setIsFailTooltipOpen] = useState(false);
  const [isSuccessTooltipOpen, setIsSuccessTooltipOpen] = useState(false);
  const [isPreloaderRender, setIsPreloaderRender] = useState(false);
  const [isKeywordTooltipOpened, setIsKeywordTooltipOpened] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [withHeader, setWithHeader] = useState(true);
  const [withFooter, setWithFooter] = useState(true);
  const [currentUser, setCurrentUser] = useState({});
  const [savedMovies, setSavedMovies] = useState([]);
  const [movies, setMovies] = useState([]);
  const [count, setCount] = useState(1);
  const [keyword, setKeyword] = useState('');
  const [isMovieShort, setIsMovieShort] = useState(true);
  const [isNothingFound, setIsNothingFound] = useState(false);
  const [isServerError, setIsServerError] = useState(false);
  let [isMenuOpened, setIsMenuOpened] = useState(false);
  const [isEmpty, setIsEmpty] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const m = JSON.parse(localStorage.getItem('movies')) || [];
    m.length > movies.length ? setIsEmpty(false) : setIsEmpty(true);
  }, [movies]);

  useEffect(() => {
    mainApi
      .getCurrentUser()
      .then((user) => {
        setIsLoggedIn(true);
        navigate('/movies');
        setCurrentUser(user);
        setCount(countByWindowWidth(document.documentElement.clientWidth));
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    if (isLoggedIn) {
      mainApi.getMovies().then((movies) => {
        setSavedMovies(movies.data);
        localStorage.setItem('saved-movies', JSON.stringify(movies.data));
      });
    }
  }, [isLoggedIn]);

  window.onresize = () => {
    setTimeout(() => {
      setCount(countByWindowWidth(document.documentElement.clientWidth));
    }, 1000);
  };

  function handleChangeCheckbox(e) {
    const checked = e.target.checked;
    setIsMovieShort(checked);
    const movies = JSON.parse(localStorage.getItem('initial-movies')) || [];
    const keyword = localStorage.getItem('keyword');

    const filteredMovies = getFilteredData(movies, keyword, checked);
    localStorage.setItem('movies', JSON.stringify(filteredMovies));
    setMovies(filteredMovies.slice(0, count === 5 ? count : count * 4));
    filteredMovies.length === 0 && movies.length !== 0
      ? setIsNothingFound(true)
      : setIsNothingFound(false);
  }

  function handleLoadMore() {
    const m = JSON.parse(localStorage.getItem('movies')) || [];
    let prevCount = movies.length;
    setMovies([...movies, ...m.slice(prevCount, prevCount + count)]);
  }

  function handleMenuClick() {
    setIsMenuOpened((isMenuOpened = !isMenuOpened));
  }

  function handleRegister(name, email, password) {
    mainApi
      .register({ name, email, password })
      .then((res) => {
        handleLogin(email, password);
      })
      .catch((err) => {
        setErrorMessage(getAuthMessage(err));
        console.log(err);
      });
  }

  function handleLogin(email, password) {
    mainApi
      .authorize({ email, password })
      .then((user) => {
        setIsLoggedIn(true);
        setCurrentUser(user);
        navigate('/movies');
      })
      .catch((err) => {
        setErrorMessage(getAuthMessage(err));
      });
  }

  function handleLogout() {
    mainApi
      .logout()
      .then(() => {
        setIsLoggedIn(false);
        setCurrentUser({});
        localStorage.clear();
        navigate('/');
      })
      .catch((err) => console.log(err));
  }

  function handleUpdateProfile(name, email) {
    mainApi
      .editUserInfo({ name, email })
      .then((user) => {
        setCurrentUser(user);
        setIsSuccessTooltipOpen(true);
      })
      .catch((err) => console.log(err));
  }

  function closeTooltip() {
    setIsFailTooltipOpen(false);
    setIsSuccessTooltipOpen(false);
  }

  // сохраняем все фильмы в хранилище
  // проверяем совпадения с сохранеными фильмами
  // при совпадении заменяем объекты типа {id: Number} На объекты типа {_id: String}

  function handleSubmitSearchForm(e) {
    e.preventDefault();
    if (keyword) {
      setIsNothingFound(false);
      setIsPreloaderRender(true);
      setIsServerError(false);
      setMovies([]);
      moviesApi
        .getMovies()
        .then((movies) => {
          localStorage.setItem('initial-movies', JSON.stringify(movies));
          // фильтруем все фильмы из БД по слову и длине
          const foundMovies = getFilteredData(movies, keyword, isMovieShort);
          if (foundMovies.length < 1) {
            setIsNothingFound(true);
            setLocalStorage(foundMovies, keyword, isMovieShort);
            setMovies([]);
          } else {
            setIsNothingFound(false);
            // id сохраненных фильмов
            const ids = savedMovies.map((m) => m.movieId);
            // id найденных фильмов
            const foundIds = foundMovies.map((m) => m.id);
            // получить 2 массива: фильмы по поиску и сохраненные
            // найти совпадения в 2-х массивах
            const matchedMovies = savedMovies.filter((m) =>
              foundIds.includes(m.movieId)
            );
            // в массиве по поиску заменить совпадения
            const notMatchedMovies = foundMovies.filter(
              (m) => !ids.includes(m.id)
            );
            const moviesToRender = [...matchedMovies, ...notMatchedMovies];
            setCount(countByWindowWidth(document.documentElement.clientWidth));
            setLocalStorage(moviesToRender, keyword, isMovieShort);
            setMovies(moviesToRender.slice(0, count === 5 ? count : count * 4));
          }
        })
        .catch((err) => {
          setIsServerError(true);
          setMovies([]);
          console.log(err);
        })
        .finally(() => {
          setIsPreloaderRender(false);
        });
    } else {
      setIsKeywordTooltipOpened(true);
      setKeyword('');
      setTimeout(() => {
        setIsKeywordTooltipOpened(false);
      }, 2000);
    }
  }

  // чтобы сохранить-лайкнуть фильм нужен объект типа {id: Number}
  // в ответ приходит объект типа {_id: String}
  // изменения происходят в 2-х местах:
  // - /movies меняется заливка на иконке лайка
  // - /saved-movies появляется карточка сохраненного фильма

  function handleLikeMovie(movie) {
    const {
      country,
      director,
      duration,
      year,
      description,
      image,
      trailerLink,
      nameRU,
      nameEN,
      id: movieId,
    } = movie;
    mainApi
      .saveMovie({
        country,
        director,
        duration,
        year,
        description,
        image: `${BASE_URL}${image.url}`,
        trailerLink,
        nameRU,
        nameEN,
        thumbnail: `${BASE_URL}${image.formats.thumbnail.url}`,
        movieId,
      })
      .then((savedMovie) => {
        const replaceMovie = (m) =>
          m.id === savedMovie.movieId ? savedMovie : m;
        // обновить savedMovies стейт и хранилище
        const newSavedMovies = [...savedMovies, savedMovie];
        localStorage.setItem('saved-movies', JSON.stringify(newSavedMovies));
        setSavedMovies(newSavedMovies);
        // обновить стейт movies
        setMovies((state) => state.map(replaceMovie));
        // обновиь хранилище movies
        const movies = JSON.parse(localStorage.getItem('movies'));
        const newMovies = movies.map(replaceMovie);
        localStorage.setItem('movies', JSON.stringify(newMovies));
      })
      .catch((err) => console.log(err));
  }
  // чтобы удалить-дизлайкнуть фильм нужен объект типа {_id: string}
  // изменение происходит в 2-х местах:
  // - /movies изменяется цвет иконки лайка
  // - и /saved-movies удаляется карточка

  function handleDeleteMovie(movieId) {
    mainApi
      .deleteMovie(movieId)
      // заменить в movies {_id: String} => {id: Number}
      // удалить в saved-movies
      .then((deletedMovie) => {
        const filterMovie = (m) => m._id !== deletedMovie._id;
        const replaceMovie = (m) =>
          m.movieId === initialItem.id ? initialItem : m;
        const initialMovies =
          JSON.parse(localStorage.getItem('initial-movies')) || [];
        // обновили хранилище saved-movies
        localStorage.setItem(
          'saved-movies',
          JSON.stringify(savedMovies.filter(filterMovie))
        );
        // обновили стейт savedMovies
        setSavedMovies((state) => state.filter(filterMovie));
        // обновили хранилище movies
        const initialItem = initialMovies.find(
          (m) => m.id === deletedMovie.movieId
        );
        const movies = JSON.parse(localStorage.getItem('movies'));
        localStorage.setItem(
          'movies',
          JSON.stringify(movies.map(replaceMovie))
        );
        // обновили стейт movies
        setMovies((state) => state.map(replaceMovie));
      })
      .catch((err) => console.log(err));
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className='page__container'>
        {withHeader && (
          <Header>
            {isLoggedIn ? (
              <>
                <MovieNavTab />
                <ProfileNavTab
                  className={'link_type_account'}
                  setIsMenuOpened={setIsMenuOpened}
                />
                <Menu onMenuClick={handleMenuClick} />
              </>
            ) : (
              <AuthNavTab />
            )}
            <Navigation
              isMenuOpened={isMenuOpened}
              setIsMenuOpened={setIsMenuOpened}
              onCloseBtnClick={handleMenuClick}
            />
          </Header>
        )}
        <Routes>
          <Route
            path='/*'
            element={
              <NotFound
                setWithFooter={setWithFooter}
                setWithHeader={setWithHeader}
              />
            }
          />
          <Route
            path='/signin'
            element={
              <Login
                setWithFooter={setWithFooter}
                setWithHeader={setWithHeader}
                onLogin={handleLogin}
                errorMessage={errorMessage}
                setErrorMessage={setErrorMessage}
                isFailTooltipOpen={isFailTooltipOpen}
                setIsFailTooltipOpen={setIsFailTooltipOpen}
              />
            }
          />
          <Route
            path='/signup'
            element={
              <Register
                setWithFooter={setWithFooter}
                setWithHeader={setWithHeader}
                onRegister={handleRegister}
                errorMessage={errorMessage}
                setErrorMessage={setErrorMessage}
                isFailTooltipOpen={isFailTooltipOpen}
                setIsFailTooltipOpen={setIsFailTooltipOpen}
              />
            }
          />
          <Route
            path='/'
            element={
              <Main
                setWithFooter={setWithFooter}
                setWithHeader={setWithHeader}
              />
            }
          />
          <Route
            path='/movies'
            element={
              <ProtectedRouteElement isLoggedIn={isLoggedIn}>
                <Movies
                  isLoggedIn={isLoggedIn}
                  setWithHeader={setWithHeader}
                  setWithFooter={setWithFooter}
                  onChangeCheckbox={handleChangeCheckbox}
                  onSumbitSearchForm={handleSubmitSearchForm}
                  isKeywordTooltipOpened={isKeywordTooltipOpened}
                  isPreloaderRender={isPreloaderRender}
                  isMovieShort={isMovieShort}
                  setIsMovieShort={setIsMovieShort}
                  keyword={keyword}
                  setKeyword={setKeyword}
                  count={count}
                  setCount={setCount}
                  movies={movies}
                  setMovies={setMovies}
                  isNothingFound={isNothingFound}
                  setIsNothingFound={setIsNothingFound}
                  isServerError={isServerError}
                  onDeleteMovie={handleDeleteMovie}
                  onLikeMovie={handleLikeMovie}
                  onLoadMore={handleLoadMore}
                  isEmpty={isEmpty}
                />
              </ProtectedRouteElement>
            }
          />
          <Route
            path='/saved-movies'
            element={
              <ProtectedRouteElement isLoggedIn={isLoggedIn}>
                <SavedMovies
                  setIsLoggedIn={setIsLoggedIn}
                  setWithFooter={setWithFooter}
                  onDeleteMovie={handleDeleteMovie}
                  isMovieShort={isMovieShort}
                  setIsMovieShort={setIsMovieShort}
                  savedMovies={savedMovies}
                  setSavedMovies={setSavedMovies}
                  isNothingFound={isNothingFound}
                  setIsNothingFound={setIsNothingFound}
                />
              </ProtectedRouteElement>
            }
          />
          <Route
            path='/profile'
            element={
              <ProtectedRouteElement isLoggedIn={isLoggedIn}>
                <Profile
                  setWithFooter={setWithFooter}
                  onLogout={handleLogout}
                  user={currentUser}
                  onUpdate={handleUpdateProfile}
                />
              </ProtectedRouteElement>
            }
          />
        </Routes>
        {withFooter && <Footer />}
        <Tooltip
          success={true}
          isOpen={isSuccessTooltipOpen}
          onClose={closeTooltip}
          text='Данные успешно обновлены'
        />
        <Tooltip
          success={false}
          isOpen={isFailTooltipOpen}
          onClose={closeTooltip}
          text='Что-то пошло не так'
        />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
