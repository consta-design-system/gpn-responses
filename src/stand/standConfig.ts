import { createConfig } from '@consta/stand';

import image from './ConstaImage.png';

export const { createStand } = createConfig({
  title: 'Consta GPN-Responses',
  id: 'gpn-responses',
  groups: [
    {
      title: 'Компоненты',
      id: 'components',
      view: 'card',
    },
  ],
  group: '',
  image,
  description:
    'Сообщения об ошибках с иллюстрациями в корпоративном стиле для нефтяной области.',
});
