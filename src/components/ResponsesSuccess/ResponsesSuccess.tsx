import { createResponses } from '@consta/uikit/__internal__/src/components/Responses/createResponses';
import { Button } from '@consta/uikit/Button';
import React from 'react';

import { ResponsesSuccessImage } from './ResponsesSuccessImage/ResponsesSuccessImage';

export const ResponsesSuccess = createResponses({
  name: 'ResponsesSuccess',
  image: ResponsesSuccessImage,
  title: 'Письмо отправлено',
  actions: <Button label="Хорошо" view="ghost" />,
});
