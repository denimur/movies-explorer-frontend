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
import * as mainApi from '../../utils/MainApi';

function App() {
  const [isRegistered, setIsRegistered] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [withHeader, setWithHeader] = useState(true);
  const [withFooter, setWithFooter] = useState(true);
  const [currentUser, setCurrentUser] = useState({});
  let [isMenuOpened, setIsMenuOpened] = useState(false);
  const navigateTo = useNavigate();

  useEffect(() => {
    mainApi
      .getCurrentUser()
      .then((user) => {
        user && setIsLoggedIn(true);
        navigateTo('/movies');
        setCurrentUser(user);
        console.log(user.name, user.email);
      })
      .catch((err) => {
        navigateTo('/');
        console.log(err);
      });
  }, []);

  function handleMenuClick() {
    setIsMenuOpened((isMenuOpened = !isMenuOpened));
  }

  function handleRegister(name, email, password) {
    mainApi
      .register({ name, email, password })
      .then((res) => {
        if (res) {
          setIsRegistered(true);
          handleLogin(email, password);
        }
      })
      .catch((err) => {
        // setIsFailTooltipOpen(true);
        console.log(err);
      });
  }

  function handleLogin(email, password) {
    mainApi
      .authorize({ email, password })
      .then((user) => {
        setIsLoggedIn(true);
        setCurrentUser(user);
        navigateTo('/movies');
      })
      .catch((err) => {
        // setIsFailTooltipOpen(true);
        console.log(err);
      });
  }

  function handleLogout() {
    mainApi
      .logout()
      .then(() => {
        setIsLoggedIn(false);
        setCurrentUser({});
        navigateTo('/');
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
                />
              </ProtectedRouteElement>
            }
          />
        </Routes>
        {withFooter && <Footer />}
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
