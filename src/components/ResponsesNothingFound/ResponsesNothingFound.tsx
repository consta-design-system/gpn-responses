import { createResponses } from '@consta/uikit/__internal__/src/components/Responses/createResponses';
import { Button } from '@consta/uikit/Button';
import React from 'react';

import { ResponsesNothingFoundImage } from './ResponsesNothingFoundImage/ResponsesNothingFoundImage';

export const ResponsesNothingFound = createResponses({
  name: 'ResponsesNothingFound',
  image: ResponsesNothingFoundImage,
  title: 'Ничего не найдено',
  description: 'Попробуйте сформулировать запрос по-другому',
  actions: <Button label="Вернуться назад" view="ghost" />,
});
