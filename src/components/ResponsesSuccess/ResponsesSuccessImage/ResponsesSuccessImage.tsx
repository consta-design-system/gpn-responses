import './ResponsesSuccessImage.css';

import React from 'react';

import { cnResponsesImage } from '##/components/ResponsesImage/ResponsesImage';
import { cn } from '##/utils/bem';

const cnResponsesSuccessImage = cn('ResponsesSuccessImage');

export const ResponsesSuccessImage: React.FC = () => {
  return (
    <div className={cnResponsesSuccessImage(null, [cnResponsesImage()])}>
      <div
        className={cnResponsesSuccessImage('Image', [
          cnResponsesImage('Image'),
        ])}
      />
    </div>
  );
};
