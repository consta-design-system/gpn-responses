import React from 'react'

import { cn } from '@/__private__/utils/bem'
import { cnResponsesImage } from '@/ResponsesImage/ResponsesImage'

import './Responses403Image.css'

const cnResponses403Image = cn('Responses403Image')

export const Responses403Image: React.FC = () => {
  return (
    <div className={cnResponses403Image(null, [cnResponsesImage()])}>
      <div className={cnResponses403Image('Image', [cnResponsesImage('Image')])} />
    </div>
  )
}
