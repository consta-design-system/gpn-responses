import { createResponses } from '@consta/uikit/__internal__/src/components/Responses/createResponses';
import { Button } from '@consta/uikit/Button';
import React from 'react';

import { ResponsesConnectionErrorImage } from './ResponsesConnectionErrorImage/ResponsesConnectionErrorImage';

export const ResponsesConnectionError = createResponses({
  name: 'ResponsesConnectionError',
  image: ResponsesConnectionErrorImage,
  title: 'Такой страницы нет',
  description: 'Возможно, эту страницу уже удалили, или в вашей ссылке ошибка',
  actions: <Button label="Вернуться назад" view="ghost" />,
});
