import { createResponses } from '@consta/uikit/__internal__/src/components/Responses/createResponses';
import { Button } from '@consta/uikit/Button';
import React from 'react';

import { Responses404Image } from './Responses404Image/Responses404Image';

export const Responses404 = createResponses({
  name: 'Responses404',
  image: Responses404Image,
  title: 'Такой страницы нет',
  description: 'Возможно, эту страницу уже удалили, или в вашей ссылке ошибка',
  actions: <Button label="Вернуться назад" view="ghost" />,
});
