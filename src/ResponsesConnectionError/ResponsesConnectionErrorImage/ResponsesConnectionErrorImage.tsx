import React from 'react'

import { cn } from '@/__private__/utils/bem'
import { cnResponsesImage } from '@/ResponsesImage/ResponsesImage'

import './ResponsesConnectionErrorImage.css'

const cnResponsesConnectionErrorImage = cn('ResponsesConnectionErrorImage')

export const ResponsesConnectionErrorImage: React.FC = () => {
  return (
    <div className={cnResponsesConnectionErrorImage(null, [cnResponsesImage()])}>
      <div className={cnResponsesConnectionErrorImage('Image', [cnResponsesImage('Image')])} />
    </div>
  )
}
