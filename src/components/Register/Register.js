import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import Logo from './../Logo/Logo';

function Register({ setWithHeader, setWithFooter }) {
  useEffect(() => {
    setWithHeader(false);
    setWithFooter(false);
  }, [setWithHeader, setWithFooter]);
  return (
    <section className='auth'>
      <Logo />
      <h1 className='auth__greeting'>Добро пожаловать!</h1>
      <form className='form'>
        <fieldset className='form__fields form__fields_place_register'>
          <label className='form__label form__label_place_register'>Имя</label>
          <input
            className='form__input form__input_place_register'
            type='text'
            placeholder=''
            defaultValue='Денис'
          />
          <div className='section-line section-line_color_grey'></div>
          <span className='form__input-error name-error'></span>
          <label className='form__label form__label_place_register'>
            E-mail
          </label>
          <input
            className='form__input form__input_place_register'
            type='email'
            defaultValue='pochta@yandex.ru'
          />
          <div className='section-line section-line_color_grey'></div>
          <span className='form__input-error email-error'></span>
          <label className='form__label form__label_place_register'>
            Пароль
          </label>
          <input
            className='form__input form__input_place_register'
            type='password'
            defaultValue='123456789'
          />
          <div className='section-line section-line_color_grey'></div>
          <span className='form__input-error password-error'>
            Что-то пошло не так...
          </span>
        </fieldset>
        <fieldset className='form__handlers form__handlers_place_register'>
          <button className='form__button form__button_type_submit'>
            Зарегистрироваться
          </button>
          <p className='form__caption'>
            Уже зарегистрированы?
            <Link to='/signin' className='form__link'>
              Войти
            </Link>
          </p>
        </fieldset>
      </form>
    </section>
  );
}

export default Register;
