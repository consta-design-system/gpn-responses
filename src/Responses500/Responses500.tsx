import { createResponses } from '@consta/uikit/__internal__/src/components/Responses/createResponses'

import { Responses500Image } from './Responses500Image/Responses500Image'

export const Responses500 = createResponses({
  name: 'Responses500',
  image: Responses500Image,
  title: 'Что-то сломалось',
  description: 'Попробуйте обновить страницу или зайдите позже',
})
