import { useBoolean, useSelect, useText } from '@consta/stand';
import { Button } from '@consta/uikit/Button';
import React from 'react';

import { Responses403 } from '##/components/Responses403';
import { Responses404 } from '##/components/Responses404';
import { Responses500 } from '##/components/Responses500';
import { Responses503 } from '##/components/Responses503';
import { ResponsesConnectionError } from '##/components/ResponsesConnectionError';
import { ResponsesDeleted } from '##/components/ResponsesDeleted';
import { ResponsesEmpty } from '##/components/ResponsesEmpty';
import { ResponsesNothingFound } from '##/components/ResponsesNothingFound';
import { ResponsesSuccess } from '##/components/ResponsesSuccess';

const components = {
  Responses403,
  Responses404,
  Responses500,
  Responses503,
  ResponsesConnectionError,
  ResponsesDeleted,
  ResponsesEmpty,
  ResponsesNothingFound,
  ResponsesSuccess,
} as const;

const componentsNames = Object.keys(components) as Array<
  keyof typeof components
>;

const Variants = () => {
  const componentName = useSelect(
    'Component',
    componentsNames,
    componentsNames[0],
  );
  const size = useSelect('Size', ['m', 'l'], 'm');
  const title = useText('Title', '');
  const description = useText('Description', '');
  const actions = useBoolean('Actions', false);

  const Component = components[componentName ?? componentsNames[0]];

  return (
    <Component
      title={title}
      description={description}
      size={size}
      actions={
        actions && <Button size="m" view="ghost" label="Вернуться назад" />
      }
    />
  );
};

export default Variants;
