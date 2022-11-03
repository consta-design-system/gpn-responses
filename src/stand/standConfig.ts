import { createConfig } from '@consta/stand';

import image from './ConstaImage.png';

export const { createStand } = createConfig({
  title: 'Consta GPN-Responses',
  id: 'gpn-responses',
  groups: [
    {
      title: 'Документация',
      id: 'docs',
      initialOpen: true,
    },
    {
      title: 'Компоненты',
      id: 'components',
      view: 'card',
      initialOpen: true,
    },
  ],
  group: 'Отдельные компоненты',
  image,
  description:
    'Сообщения об ошибках с иллюстрациями по теме добычи и переработки нефти.',
  repositoryUrl: 'https://github.com/consta-design-system/gpn-responses',
});
