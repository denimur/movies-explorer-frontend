function More({ onLoadMore, isEmpty }) {
  const btnClassName = `more__button ${
    !isEmpty ? '' : 'more__button_disabled'
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
