function Menu({ onMenuClick }) {
  return (
    <button className='menu' onClick={onMenuClick}>
      <div className='menu__item'></div>
      <div className='menu__item'></div>
      <div className='menu__item'></div>
    </button>
  );
}

export default Menu;
