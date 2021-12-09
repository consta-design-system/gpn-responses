# [Дизайн-система Consta](http://consta.gazprom-neft.ru/) | GPN_RESPONSES

Это компонент Tree для дизайн-системы Consta: дерево, подходит для создания иерархических структур. Компонент взят из библиотеки [rc-tree](https://github.com/react-component/tree) и адаптирован для [дизайн-системы Consta](https://consta.gazprom-neft.ru/).

# Как использовать

## Установите пакет

```sh
# NPM
$ npm install @consta/gpn-responses

# Yarn
$ yarn add @consta/gpn-responses
```

## Подключите зависимости

Чтобы начать работу, установите библиотеку [`@consta/uikit`](https://www.npmjs.com/package/@consta/uikit) и [настройте тему](https://consta-uikit.vercel.app/?path=/docs/components-theme--playground).

### Можно использовать компоненты

Например, так:

```js
import { Theme, presetGpnDefault } from '@consta/uikit/Theme'
import { Responses403 } from '@consta/gpn-responses'

const App = () => {
  return (
    <Theme preset={presetGpnDefault}>
      <Responses403 />
    </Theme>
  )
}
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
# Сборка и старт Storybook
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

[Посмотреть документацию и примеры](https://consta-tree.vercel.app/)

## Контрибьюторам

Будем рады, если вы захотите принять участие в разработке дизайн-системы =) Но сначала прочитайте [инструкцию для контрибьюторов](https://consta-uikit.vercel.app/?path=/docs/common-develop-contributors--page).

## Лицензия

Дизайн-систему можно использовать бесплатно, она распространяется ПАО «Газпром нефть» на условиях открытой [лицензии MIT](https://consta.gazprom-neft.ru/static/licence_mit.pdf).
