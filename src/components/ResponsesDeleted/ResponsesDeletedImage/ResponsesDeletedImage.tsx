import './ResponsesDeletedImage.css';

import React from 'react';

import { cnResponsesImage } from '##/components/ResponsesImage/ResponsesImage';
import { cn } from '##/utils/bem';

const cnResponsesDeletedImage = cn('ResponsesDeletedImage');

export const ResponsesDeletedImage: React.FC = () => {
  return (
    <div className={cnResponsesDeletedImage(null, [cnResponsesImage()])}>
      <div
        className={cnResponsesDeletedImage('Image', [
          cnResponsesImage('Image'),
        ])}
      />
    </div>
  );
};
