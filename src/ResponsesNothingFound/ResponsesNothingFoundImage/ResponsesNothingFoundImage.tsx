import React from 'react'

import { cn } from '@/__private__/utils/bem'
import { cnResponsesImage } from '@/ResponsesImage/ResponsesImage'

import './ResponsesNothingFoundImage.css'

const cnResponsesNothingFoundImage = cn('ResponsesNothingFoundImage')

export const ResponsesNothingFoundImage: React.FC = () => {
  return (
    <div className={cnResponsesNothingFoundImage(null, [cnResponsesImage()])}>
      <div className={cnResponsesNothingFoundImage('Image', [cnResponsesImage('Image')])} />
    </div>
  )
}
