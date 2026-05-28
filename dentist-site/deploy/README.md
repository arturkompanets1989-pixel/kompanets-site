# Деплой на GitHub Pages

## Первый раз (один раз)

```bash
# 1. Войди в папку проекта
cd dentist-site

# 2. Инициализируй git
git init

# 3. Подключи свой репозиторий на GitHub
git remote add origin https://github.com/ТВО_ЛОГИН/ИМЯ_РЕПО.git

# 4. Первый коммит
git add .
git commit -m "init: первая версия сайта"
git push -u origin main
```

## Настройка GitHub Pages
1. Открой репозиторий на GitHub
2. Settings → Pages
3. Source: Deploy from branch → main → /src
4. Save → через 1-2 минуты сайт живёт на: https://ТВО_ЛОГИН.github.io/ИМЯ_РЕПО

## Свой домен
1. В папке `/src` создай файл `CNAME` с одной строкой: `твойдомен.ru`
2. У регистратора домена добавь DNS-запись: CNAME → ТВО_ЛОГИН.github.io
3. В GitHub Pages включи Enforce HTTPS

## Каждое изменение после этого

```bash
git add .
git commit -m "что изменил"
git push
```
Сайт обновится автоматически через 1-2 минуты.

## Бот — деплой на VPS
Бот живёт отдельно. Деплоится на VPS (Timeweb, ~150 руб/мес):
```bash
cd bot
npm install
cp ../.env.example .env
# заполни .env реальными токенами
node src/index.js
```
