function More({ onLoadMore }) {
  return (
    <section className='more'>
      <button className='more__button' onClick={onLoadMore}>
        Ещё
      </button>
    </section>
  );
}

export default More;
