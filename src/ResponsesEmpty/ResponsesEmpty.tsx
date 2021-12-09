import React from 'react'

import { createResponses } from '@consta/uikit/__internal__/src/components/Responses/createResponses'
import { Button } from '@consta/uikit/Button'

import { ResponsesEmptyImage } from './ResponsesEmptyImage/ResponsesEmptyImage'

export const ResponsesEmpty = createResponses({
  name: 'ResponsesEmpty',
  image: ResponsesEmptyImage,
  title: 'Здесь пока ничего нет',
  description: 'Будьте первым, добавьте что-нибудь полезное',
  actions: <Button label="Добавить что-нибудь" />,
})
