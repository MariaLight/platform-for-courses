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

## Хостинг (Render Static Site)

Сборка: `npm install && npm run build`, папка `dist`.
Переменная **на этапе сборки** (не после):

```
VITE_API_URL=https://platform-backend-642t.onrender.com/api
NODE_VERSION=20
```

Ветка `main`. Чтобы обновление страницы на `/login` не давало 404, в `public/_redirects` rewrite на `index.html`. На Render то же можно в Settings → Redirects/Rewrites: Source `/*`, Destination `/index.html`, Action Rewrite.
