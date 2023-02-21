import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Logo from './../Logo/Logo';

function Login({ setWithHeader, setWithFooter, onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    setEmail('');
    setPassword('');
  }, []);

  useEffect(() => {
    setWithHeader(false);
    setWithFooter(false);
  }, [setWithHeader, setWithFooter]);

  function handleChangeEmail(e) {
    setEmail(e.target.value);
  }

  function handleChangePassword(e) {
    setPassword(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log('submit');

    if (!email || !password) {
      return;
    }
    onLogin(email, password);
  }

  return (
    <section className='auth'>
      <Logo />
      <h1 className='auth__greeting'>Рады видеть!</h1>
      <form className='form' onSubmit={handleSubmit}>
        <fieldset className='form__fields form__fields_place_login'>
          <label
            htmlFor='email'
            className='form__label form__label_place_login'
          >
            E-mail
          </label>
          <input
            id='email'
            className='form__input form__input_place_login'
            type='email'
            value={email}
            onChange={handleChangeEmail}
          />
          <div className='section-line section-line_color_grey'></div>
          <span className='form__input-error email-error'></span>
          <label
            htmlFor='password'
            className='form__label form__label_place_login'
          >
            Пароль
          </label>
          <input
            id='password'
            className='form__input form__input_place_login'
            type='password'
            value={password}
            onChange={handleChangePassword}
          />
          <div className='section-line section-line_color_grey'></div>
          <span className='form__input-error password-error'></span>
        </fieldset>
        <fieldset className='form__handlers form__handlers_place_login'>
          <button
            className='form__button form__button_type_submit'
            type='submit'
          >
            Войти
          </button>
          <p className='form__caption'>
            Ещё не зарегистрированы?
            <Link to='/signup' className='form__link'>
              Регистрация
            </Link>
          </p>
        </fieldset>
      </form>
    </section>
  );
}

export default Login;
