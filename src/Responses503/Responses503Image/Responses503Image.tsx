import React from 'react'

import { cn } from '@/__private__/utils/bem'
import { cnResponsesImage } from '@/ResponsesImage/ResponsesImage'

import './Responses503Image.css'

const cnResponses503Image = cn('Responses503Image')

export const Responses503Image: React.FC = () => {
  return (
    <div className={cnResponses503Image(null, [cnResponsesImage()])}>
      <div className={cnResponses503Image('Image', [cnResponsesImage('Image')])} />
    </div>
  )
}
