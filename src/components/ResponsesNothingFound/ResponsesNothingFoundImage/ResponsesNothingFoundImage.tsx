import './ResponsesNothingFoundImage.css';

import React from 'react';

import { cnResponsesImage } from '##/components/ResponsesImage/ResponsesImage';
import { cn } from '##/utils/bem';

const cnResponsesNothingFoundImage = cn('ResponsesNothingFoundImage');

export const ResponsesNothingFoundImage: React.FC = () => {
  return (
    <div className={cnResponsesNothingFoundImage(null, [cnResponsesImage()])}>
      <div
        className={cnResponsesNothingFoundImage('Image', [
          cnResponsesImage('Image'),
        ])}
      />
    </div>
  );
};
