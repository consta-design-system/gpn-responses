import { createResponses } from '@consta/uikit/__internal__/src/components/Responses/createResponses';
import { Button } from '@consta/uikit/Button';
import React from 'react';

import { ResponsesDeletedImage } from './ResponsesDeletedImage/ResponsesDeletedImage';

export const ResponsesDeleted = createResponses({
  name: 'ResponsesDeleted',
  image: ResponsesDeletedImage,
  title: '*Что-то* удалено',
  description: '*Что-то* успешно удалено',
  actions: (
    <>
      <Button
        label="Вернуть на место"
        view="ghost"
        style={{ marginRight: 'var(--space-m)' }}
      />
      <Button label="Отлично!" view="ghost" />
    </>
  ),
});
