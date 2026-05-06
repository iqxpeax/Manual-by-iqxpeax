# Manual by iqxpeax

Руководство по проверке игроков на читы.

---

## Структура

```
manual-doc/
├── index.html              ← открывать это
├── assets/
│   ├── css/
│   │   └── general.css    ← все стили (тёмная + светлая тема)
│   ├── js/
│   │   ├── general.js     ← весь контент + навигация
│   │   ├── images.js      ← все скриншоты (base64)
│   │   └── save.js        ← тема + сохранение прогресса
│   └── img/               ← дополнительные изображения
├── errors/
│   ├── 404.html
│   └── 500.html
├── pages/
├── README.md
└── LICENSE
```

## Использование

Открыть `index.html` в браузере — всё встроено.

## Редактирование контента

Файл `assets/js/general.js`, массив `pages[]`:

```js
{
  title: "Название",
  tag: "Тег",
  intro: "Описание",
  content: `HTML контент`,
  steps: ["Шаг 1", "Шаг 2"],
}
```

Добавить картинку: `${localImg('imageN.png', 'Подпись')}`

Добавить блок кода: `${codeBlock('текст')}`

## Темы

- 🌙 Тёмная — по умолчанию
- ☀️ Светлая — кнопка в шапке
- Выбор сохраняется в localStorage

## Контакты

Telegram: [@iqxpeax](https://t.me/iqxpeax) | Discord: @iqxpix

© 2025 iqxpeax
