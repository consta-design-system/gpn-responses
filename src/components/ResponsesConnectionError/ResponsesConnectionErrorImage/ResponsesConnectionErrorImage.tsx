import './ResponsesConnectionErrorImage.css';

import React from 'react';

import { cnResponsesImage } from '##/components/ResponsesImage/ResponsesImage';
import { cn } from '##/utils/bem';

const cnResponsesConnectionErrorImage = cn('ResponsesConnectionErrorImage');

export const ResponsesConnectionErrorImage: React.FC = () => {
  return (
    <div
      className={cnResponsesConnectionErrorImage(null, [cnResponsesImage()])}
    >
      <div
        className={cnResponsesConnectionErrorImage('Image', [
          cnResponsesImage('Image'),
        ])}
      />
    </div>
  );
};
