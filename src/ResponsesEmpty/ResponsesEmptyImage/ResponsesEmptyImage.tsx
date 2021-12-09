import React from 'react'

import { cn } from '@/__private__/utils/bem'
import { cnResponsesImage } from '@/ResponsesImage/ResponsesImage'

import './ResponsesEmptyImage.css'

const cnResponsesEmptyImage = cn('ResponsesEmptyImage')

export const ResponsesEmptyImage: React.FC = () => {
  return (
    <div className={cnResponsesEmptyImage(null, [cnResponsesImage()])}>
      <div className={cnResponsesEmptyImage('Image', [cnResponsesImage('Image')])} />
    </div>
  )
}
