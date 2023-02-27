import successPath from '../../images/success_icon.png';
import failPath from '../../images/fail_icon.png';

function Tooltip({ isOpen, onClose, text, success }) {
  const imagePath = success ? successPath : failPath;

  return (
    <div className={`popup ${isOpen ? 'popup_opened' : ''}`}>
      <div className='popup__container'>
        <img className='popup__tooltip-image' src={imagePath} alt='success' />
        <p className='popup__tooltip-text'>{text}</p>
        <button className='popup__close-btn' onClick={onClose}></button>
      </div>
    </div>
  );
}

export default Tooltip;
