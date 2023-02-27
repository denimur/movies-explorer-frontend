class MoviesApi {
  constructor() {
    this._url = 'https://api.nomoreparties.co';
  }

  _getResponseData(res) {
    if (!res.ok) {
      return Promise.reject(`Ошибка: ${(res.status, res.message)}`);
    }
    return res.json();
  }

  getMovies() {
    return fetch(`${this._url}/beatfilm-movies`, {
      method: 'GET',
    }).then((res) => this._getResponseData(res));
  }
}

export const moviesApi = new MoviesApi();
