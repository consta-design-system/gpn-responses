import React from 'react'

import { cn } from '@/__private__/utils/bem'
import { cnResponsesImage } from '@/ResponsesImage/ResponsesImage'

import './ResponsesSuccessImage.css'

const cnResponsesSuccessImage = cn('ResponsesSuccessImage')

export const ResponsesSuccessImage: React.FC = () => {
  return (
    <div className={cnResponsesSuccessImage(null, [cnResponsesImage()])}>
      <div className={cnResponsesSuccessImage('Image', [cnResponsesImage('Image')])} />
    </div>
  )
}
