# [Дизайн-система Consta](http://consta.design/) | GPN-responses

Сообщения об ошибках с иллюстрациями в нефтяной тематике.

## Как использовать

### Установите пакет

```sh
# NPM
$ npm install @consta/gpn-responses
# Yarn
$ yarn add @consta/gpn-responses
```

### Подключите зависимости

Чтобы начать работу, установите библиотеку [`@consta/uikit`](https://www.npmjs.com/package/@consta/uikit) и [настройте тему](http://uikit.consta.design/libs/uikit/theme-themeabout).

### Можно использовать компоненты

Например, так:

```js
import { Theme, presetGpnDefault } from '@consta/uikit/Theme';
import { Responses403 } from '@consta/gpn-responses';
const App = () => {
  return (
    <Theme preset={presetGpnDefault}>
      <Responses403 />
    </Theme>
  );
};
```

## Разработка

### Подготовка окружения

Рабочее окружение должно содержать NodeJS и Yarn, необходимые версии можно узнать в файле [package.json](./package.json) в блоке **engines**.

Чтобы установить зависимости, выполните команду:

```sh
$ yarn install
```

### Основные команды

```sh
# Сборка и старт
$ yarn start
# Сборка для production
$ yarn build
# Линтинг всех файлов
$ yarn lint
# Форматирование всех файлов prettier
$ yarn format
# Запуск юнит-тестов
$ yarn unit
# Запуск юнит-тестов, тестирование TS, линтинг файлов
$ yarn test
```

## Документация

[Посмотреть документацию и примеры](http://gpn-responses.consta.design/)

## Контрибьюторам

Будем рады, если вы захотите принять участие в разработке дизайн-системы =) Но сначала прочитайте [инструкцию для контрибьюторов](http://uikit.consta.design/libs/uikit/custom-contribute).

## Лицензия

Дизайн-систему можно использовать бесплатно, она распространяется на условиях открытой [лицензии MIT](https://consta.gazprom-neft.ru/static/licence_mit.pdf).
