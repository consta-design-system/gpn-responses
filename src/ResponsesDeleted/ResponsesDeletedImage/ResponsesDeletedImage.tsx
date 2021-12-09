import React from 'react'

import { cn } from '@/__private__/utils/bem'
import { cnResponsesImage } from '@/ResponsesImage/ResponsesImage'

import './ResponsesDeletedImage.css'

const cnResponsesDeletedImage = cn('ResponsesDeletedImage')

export const ResponsesDeletedImage: React.FC = () => {
  return (
    <div className={cnResponsesDeletedImage(null, [cnResponsesImage()])}>
      <div className={cnResponsesDeletedImage('Image', [cnResponsesImage('Image')])} />
    </div>
  )
}
