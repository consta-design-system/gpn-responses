import './Responses403Image.css';

import React from 'react';

import { cnResponsesImage } from '##/components/ResponsesImage/ResponsesImage';
import { cn } from '##/utils/bem';

const cnResponses403Image = cn('Responses403Image');

export const Responses403Image: React.FC = () => {
  return (
    <div className={cnResponses403Image(null, [cnResponsesImage()])}>
      <div
        className={cnResponses403Image('Image', [cnResponsesImage('Image')])}
      />
    </div>
  );
};
