import logoPath from '../../images/logo.svg';
import { Link } from 'react-router-dom';

function Logo() {
  return (
    <Link to='/' className='logo-wrapper'>
      <img src={logoPath} className='logo' />
    </Link>
  );
}

export default Logo;
