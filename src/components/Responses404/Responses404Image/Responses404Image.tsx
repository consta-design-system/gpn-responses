import './Responses404Image.css';

import React from 'react';

import { cnResponsesImage } from '##/components/ResponsesImage/ResponsesImage';
import { cn } from '##/utils/bem';

const cnResponses404Image = cn('Responses404Image');

export const Responses404Image: React.FC = () => {
  return (
    <div className={cnResponses404Image(null, [cnResponsesImage()])}>
      <div
        className={cnResponses404Image('Image', [cnResponsesImage('Image')])}
      />
    </div>
  );
};
