import React from 'react'

import { cn } from '@/__private__/utils/bem'
import { cnResponsesImage } from '@/ResponsesImage/ResponsesImage'

import './Responses404Image.css'

const cnResponses404Image = cn('Responses404Image')

export const Responses404Image: React.FC = () => {
  return (
    <div className={cnResponses404Image(null, [cnResponsesImage()])}>
      <div className={cnResponses404Image('Image', [cnResponsesImage('Image')])} />
    </div>
  )
}
