import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import Logo from './../Logo/Logo';

function Login({ setWithHeader, setWithFooter }) {
  useEffect(() => {
    setWithHeader(false);
    setWithFooter(false);
  }, []);
  return (
    <section className='auth'>
      <Logo />
      <h1 className='auth__greeting'>Рады видеть!</h1>
      <form className='form'>
        <fieldset className='form__fields form__fields_place_login'>
          <label className='form__label'>E-mail</label>
          <input
            className='form__input'
            type='email'
            defaultValue='pochta@yandex.ru'
          />
          <div className='section__line section__line_color_grey'></div>
          <span className='form__input-error email-error'></span>
          <label className='form__label'>Пароль</label>
          <input className='form__input' type='password' />
          <div className='section__line section__line_color_grey'></div>
          <span className='form__input-error password-error'>
            Что-то пошло не так...
          </span>
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
