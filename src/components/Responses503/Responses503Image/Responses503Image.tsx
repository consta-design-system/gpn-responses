import './Responses503Image.css';

import React from 'react';

import { cnResponsesImage } from '##/components/ResponsesImage/ResponsesImage';
import { cn } from '##/utils/bem';

const cnResponses503Image = cn('Responses503Image');

export const Responses503Image: React.FC = () => {
  return (
    <div className={cnResponses503Image(null, [cnResponsesImage()])}>
      <div
        className={cnResponses503Image('Image', [cnResponsesImage('Image')])}
      />
    </div>
  );
};
