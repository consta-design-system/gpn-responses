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
  group: 'Специальные компоненты',
  image,
  description:
    'Сообщения об ошибках с иллюстрациями по теме добычи и переработки нефти.',
  repositoryUrl: 'https://github.com/consta-design-system/gpn-responses',
  figmaUrl:
    'https://www.figma.com/file/v9Jkm2GrymD277dIGpRBSH/Consta-UI-Kit?type=design&node-id=6263-116157&t=kKryFkzj99IXSSgO-0',
});
