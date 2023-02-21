function More({ onLoadMore, notEmpty }) {
  const btnClassName = `more__button ${
    notEmpty ? '' : 'more__button_disabled'
  }`;

  return (
    <section className='more'>
      <button className={btnClassName} onClick={onLoadMore}>
        Ещё
      </button>
    </section>
  );
}

export default More;
