import { Link } from 'react-router-dom';

function AuthNavTab() {
  return (
    <div className='auth-control'>
      <Link
        to='/signup'
        className='auth-control__link auth-control__link_type_signup'
      >
        Регистрация
      </Link>
      <Link
        to='/signin'
        className='auth-control__link auth-control__link_type_signin'
      >
        Войти
      </Link>
    </div>
  );
}

export default AuthNavTab;
