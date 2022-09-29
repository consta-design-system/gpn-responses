import './Responses500Image.css';

import React from 'react';

import { cnResponsesImage } from '##/components/ResponsesImage/ResponsesImage';
import { cn } from '##/utils/bem';

const cnResponses500Image = cn('Responses500Image');

export const Responses500Image: React.FC = () => {
  return (
    <div className={cnResponses500Image(null, [cnResponsesImage()])}>
      <div
        className={cnResponses500Image('Image', [cnResponsesImage('Image')])}
      />
    </div>
  );
};
