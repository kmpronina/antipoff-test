### Тестовое задание для Antipoff Group.

Проект доступен по [ссылке](https://antipoff-test-seven.vercel.app/).

Реализован следующий функционал:

- при попытке попасть на сайт неавторизованный пользователь через Protected Route попадает на страницу регистрации;
- все поля для регистрации подлежат валидации, также предусмотрена возможность получения ошибки от сервера (данные для входа:
  email: eve.holt@reqres.in
  password: pistol);
- от API [reqres.in](https://reqres.in/) помимо запросов для авторизации также совершаем запросы для получения данных о нескольких пользователях (6 на странице) и о выбранном пользователе;
- добавлена возможность отмечать понравившихся пользователей, лайки сохраняются и при перезагрузке страницы.

При реализации проекта использованы следующие инструменты: React, Redux, formik+yup, Tailwind CSS.
