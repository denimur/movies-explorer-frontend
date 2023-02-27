export function getAuthMessage(err) {
  let message = '';
  const status = err.slice(-3);
  switch (status) {
    case '400':
      message = 'При авторизации произошла ошибка.';
      break;
    case '401':
      message = 'Вы ввели неправильный логин или пароль.';
      break;
    case '409':
      message = 'Пользователь с таким email уже существует.';
      break;
    case '404':
      message = 'Страница по указанному маршруту не найдена.';
      break;
    default:
      message = 'На сервере произошла ошибка.';
  }
  return message;
}
