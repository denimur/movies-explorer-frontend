import React, { useState } from 'react';
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

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [withHeader, setWithHeader] = useState(true);
  const [withFooter, setWithFooter] = useState(true);
  let [isMenuOpened, setIsMenuOpened] = useState(false);

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
