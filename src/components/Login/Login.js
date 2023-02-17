import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import Logo from './../Logo/Logo';

function Login({ setWithHeader, setWithFooter }) {
  useEffect(() => {
    setWithHeader(false);
    setWithFooter(false);
  }, [setWithHeader, setWithFooter]);
  return (
    <section className='auth'>
      <Logo />
      <h1 className='auth__greeting'>Рады видеть!</h1>
      <form className='form'>
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
            defaultValue='pochta@yandex.ru'
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
          />
          <div className='section-line section-line_color_grey'></div>
          <span className='form__input-error password-error'></span>
        </fieldset>
        <fieldset className='form__handlers form__handlers_place_login'>
          <button className='form__button form__button_type_submit'>
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
