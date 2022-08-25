import { createResponses } from '@consta/uikit/__internal__/src/components/Responses/createResponses';
import { Button } from '@consta/uikit/Button';
import React from 'react';

import { Responses403Image } from './Responses403Image/Responses403Image';

export const Responses403 = createResponses({
  name: 'Responses403',
  image: Responses403Image,
  title: 'Нет доступа',
  description:
    'Если вы уверены, что вам нужна эта страница, запросите доступ у администратора',
  actions: <Button label="Запросить доступ" view="ghost" />,
});
