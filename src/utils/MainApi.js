class MainApi {
  constructor() {
    this._url = 'https://api.denimur.diploma.nomoredomains.club';
  }

  saveMovie() {
    return fetch(`${this._url}/movies`, {
      method: 'POST',
      // credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((res) => this._getResponseData(res));
  }

  deleteMovie(movieId) {
    return fetch(`${this._url}/movies/${movieId}`, {
      method: 'DELETE',
      // credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((res) => this._getResponseData(res));
  }
}
