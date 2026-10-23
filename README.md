# Инструкция по запуску приложения

Клиентская часть работает с REST API `platform-backend` (Express + MySQL).
Адрес API задаётся переменной `VITE_API_URL` (по умолчанию `http://localhost:3000/api`).

1. Скопировать репозитории клиентской и серверной частей.
2. Поднять MySQL и (при необходимости) выполнить `schema.sql` / `migrate.sql` в `platform-backend`.
3. В папке `platform-backend`: `npm i`, затем `npm start`.
4. В папке клиентского приложения: `npm i`, затем `npm run dev`.
5. Открыть http://localhost:5173/

Эмулятор `npm run server` (json-server, порт 3026) больше не нужен для обычного запуска. Его можно использовать только как запасной прототип, если серверная часть не запущена — тогда в `.env.development` укажите `VITE_API_URL=http://localhost:3026`.

Тестовые входные данные для пользователей:
Администратор:
login: mdlight@mail.ru
pass: 73456890

Редактор:
login: mdlight97@gmail.com
pass: qwerty2020

Ученик:
login: testtest@mail.ru
pass: qazxsw

Регистрация автоматически ставит вам роль ученика
