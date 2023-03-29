export function getLowerCaseTitle(title) {
  const lowerCaseWords = [];
  title.split(' ').forEach((w) => lowerCaseWords.push(w.toLowerCase()));
  return lowerCaseWords.join(' ');
}

export function getFilteredData(movies, keyword, isShort) {
  return movies
    .filter((m) => (isShort ? m.duration < 41 : m))
    .filter((m) => getLowerCaseTitle(m.nameRU).includes(keyword.toLowerCase()));
}

export function setLocalStorage(...args) {
  for (let arg of args) {
    if (typeof arg === 'boolean') {
      localStorage.setItem('isShort', arg);
    } else if (typeof arg === 'string') {
      localStorage.setItem('keyword', arg);
    } else {
      localStorage.setItem('movies', JSON.stringify(arg));
    }
  }
}

export function countByWindowWidth(width) {
  if (width >= 320 && width < 768) {
    return 5;
  }
  if (width >= 768 && width <= 1100) {
    return 2;
  }
  if (width > 1100 && width < 1280) {
    return 3;
  }
  if (width >= 1280 && width < 2560) {
    return 4;
  }
}

export function formatTime(duration) {
  const hours = Math.floor(duration / 60);
  const minutes = duration % 60;
  return `${hours > 0 ? hours : ''}${hours > 0 ? 'ч' : ''} ${
    minutes > 0 ? minutes : ''
  }${
    minutes > 0 && hours > 0 ? 'м' : minutes > 0 && hours === 0 ? ' мин' : ''
  }`;
}
