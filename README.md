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

Чтобы начать работу, установите библиотеку [`@consta/uikit`](https://www.npmjs.com/package/@consta/uikit) и [настройте тему](http://consta.design/libs/portal/theme-themeabout).

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

## Документация

[Посмотреть документацию и примеры](http://consta.design/libs/gpn-responses)

## Разработка

### Подготовка окружения

Рабочее окружение должно содержать NodeJS и Yarn.

Чтобы установить зависимости, выполните команду:

```sh
$ yarn install
```

### Основные команды

```sh
# Запуск локального сервера для разработки
$ yarn start

# Сборка пакета
$ yarn build

# Сборка стенда
$ yarn stand:build

# Запуск тестов
$ yarn test
```

## Контрибьюторам

Будем рады, если вы захотите принять участие в разработке дизайн-системы =) Но сначала прочитайте [инструкцию для контрибьюторов](https://consta.design/libs/portal/contributers-code).

## Лицензия

Дизайн-систему можно использовать бесплатно, она распространяется на условиях открытой [лицензии MIT](https://consta.gazprom-neft.ru/static/licence_mit.pdf).
