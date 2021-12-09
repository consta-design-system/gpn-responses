import { createResponses } from '@consta/uikit/__internal__/src/components/Responses/createResponses'

import { Responses503Image } from './Responses503Image/Responses503Image'

export const Responses503 = createResponses({
  name: 'Responses503',
  image: Responses503Image,
  title: 'Технические работы',
  description: 'Скорее всего, мы уже решаем проблему. Попробуйте зайти позже.',
})
