import React from 'react'

import { cn } from '@/__private__/utils/bem'
import { cnResponsesImage } from '@/ResponsesImage/ResponsesImage'

import './Responses500Image.css'

const cnResponses500Image = cn('Responses500Image')

export const Responses500Image: React.FC = () => {
  return (
    <div className={cnResponses500Image(null, [cnResponsesImage()])}>
      <div className={cnResponses500Image('Image', [cnResponsesImage('Image')])} />
    </div>
  )
}
