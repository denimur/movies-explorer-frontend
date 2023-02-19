import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
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
import { moviesApi } from './../../utils/MoviesApi';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [withHeader, setWithHeader] = useState(true);
  const [withFooter, setWithFooter] = useState(true);
  const [movies, setMovies] = useState([]);
  // const [currentUser, setCurrentUser] = useState({});
  let [isMenuOpened, setIsMenuOpened] = useState(false);

  useEffect(() => {
    if (isLoggedIn) {
      moviesApi
        .getMovies()
        .then((movies) => setMovies(movies))
        .catch((err) => console.log(err));
    }
  }, [isLoggedIn]);

  function handleMenuClick() {
    setIsMenuOpened((isMenuOpened = !isMenuOpened));
  }

  return (
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
            />
          }
        />
        <Route
          path='/signup'
          element={
            <Register
              setWithFooter={setWithFooter}
              setWithHeader={setWithHeader}
            />
          }
        />
        <Route
          path='/'
          element={
            <Main setWithFooter={setWithFooter} setWithHeader={setWithHeader} />
          }
        />
        <Route
          path='/movies'
          element={
            <Movies
              setIsLoggedIn={setIsLoggedIn}
              setWithFooter={setWithFooter}
              movies={movies}
            />
          }
        />
        <Route
          path='/saved-movies'
          element={
            <SavedMovies
              setIsLoggedIn={setIsLoggedIn}
              setWithFooter={setWithFooter}
            />
          }
        />
        <Route
          path='/profile'
          element={<Profile setWithFooter={setWithFooter} />}
        />
      </Routes>
      {withFooter && <Footer />}
    </div>
  );
}

export default App;
