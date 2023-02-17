import { Link } from 'react-router-dom';
import iconPath from '../../images/account-icon.svg';

function ProfileNavTab({ className, setIsMenuOpened }) {
  return (
    <Link
      to='/profile'
      className={`link ${className}`}
      onClick={() => setIsMenuOpened(false)}
    >
      Аккаунт
      <div className='icon'>
        <img src={iconPath} className='icon__content' alt=' ' />
      </div>
    </Link>
  );
}

export default ProfileNavTab;
