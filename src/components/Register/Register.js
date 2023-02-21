import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Logo from './../Logo/Logo';

function Register({ setWithHeader, setWithFooter, onRegister }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    setWithHeader(false);
    setWithFooter(false);
    setName('');
    setEmail('');
    setPassword('');
  }, [setWithHeader, setWithFooter]);

  function handleChangeName(e) {
    setName(e.target.value);
  }

  function handleChangeEmail(e) {
    setEmail(e.target.value);
  }

  function handleChangePassword(e) {
    setPassword(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!name || !email || !password) {
      return;
    }
    onRegister(name, email, password);
  }

  return (
    <section className='auth'>
      <Logo />
      <h1 className='auth__greeting'>Добро пожаловать!</h1>
      <form className='form' onSubmit={handleSubmit}>
        <fieldset className='form__fields form__fields_place_register'>
          <label className='form__label form__label_place_register'>Имя</label>
          <input
            className='form__input form__input_place_register'
            type='text'
            placeholder=''
            value={name}
            onChange={handleChangeName}
          />
          <div className='section-line section-line_color_grey'></div>
          <span className='form__input-error name-error'></span>
          <label className='form__label form__label_place_register'>
            E-mail
          </label>
          <input
            className='form__input form__input_place_register'
            type='email'
            value={email}
            onChange={handleChangeEmail}
          />
          <div className='section-line section-line_color_grey'></div>
          <span className='form__input-error email-error'></span>
          <label className='form__label form__label_place_register'>
            Пароль
          </label>
          <input
            className='form__input form__input_place_register'
            type='password'
            value={password}
            onChange={handleChangePassword}
          />
          <div className='section-line section-line_color_grey'></div>
          <span className='form__input-error password-error'></span>
        </fieldset>
        <fieldset className='form__handlers form__handlers_place_register'>
          <button
            className='form__button form__button_type_submit'
            type='submit'
          >
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
