import { createConfig } from '@consta/stand';

import image from './ConstaImage.png';

const groups = [
  {
    title: 'Компоненты',
    id: 'components',
  },
] as const;

export const { createStand } = createConfig({
  title: 'Consta GPN-Responses',
  id: 'gpn-responses',
  groups,
  group: '',
  image,
  description:
    'Сообщения об ошибках с иллюстрациями в корпоративном стиле для нефтяной области.',
});
