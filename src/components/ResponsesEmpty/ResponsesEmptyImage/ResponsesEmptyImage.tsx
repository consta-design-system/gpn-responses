import './ResponsesEmptyImage.css';

import React from 'react';

import { cnResponsesImage } from '##/components/ResponsesImage/ResponsesImage';
import { cn } from '##/utils/bem';

const cnResponsesEmptyImage = cn('ResponsesEmptyImage');

export const ResponsesEmptyImage: React.FC = () => {
  return (
    <div className={cnResponsesEmptyImage(null, [cnResponsesImage()])}>
      <div
        className={cnResponsesEmptyImage('Image', [cnResponsesImage('Image')])}
      />
    </div>
  );
};
