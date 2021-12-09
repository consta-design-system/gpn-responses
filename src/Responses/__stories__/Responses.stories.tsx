import * as React from 'react'

import { Button } from '@consta/uikit/Button'
import { boolean, select, text } from '@storybook/addon-knobs'

import { createMetadata } from '@/__private__/storybook'
import { Responses403 } from '@/Responses403'
import { Responses404 } from '@/Responses404'
import { Responses500 } from '@/Responses500'
import { Responses503 } from '@/Responses503'
import { ResponsesConnectionError } from '@/ResponsesConnectionError'
import { ResponsesDeleted } from '@/ResponsesDeleted'
import { ResponsesEmpty } from '@/ResponsesEmpty'
import { ResponsesNothingFound } from '@/ResponsesNothingFound'
import { ResponsesSuccess } from '@/ResponsesSuccess'

import mdx from './Responses.docs.mdx'

const components = {
  Responses403,
  Responses404,
  Responses500,
  Responses503,
  ResponsesConnectionError,
  ResponsesDeleted,
  ResponsesEmpty,
  ResponsesNothingFound,
  ResponsesSuccess,
} as const

const componentsNames = Object.keys(components) as Array<keyof typeof components>

const defaultKnobs = () => ({
  component: select('Component', componentsNames, componentsNames[0]),
  size: select('Size', ['m', 'l'], 'm'),
  title: text('Title', ''),
  description: text('Description', ''),
  actions: boolean('Actions', false),
})

export function Playground() {
  const { size, title, description, component: componentName, actions } = defaultKnobs()

  const Component = components[componentName]

  return (
    <>
      <Component
        title={title}
        description={description}
        size={size}
        actions={actions && <Button size="m" view="ghost" label="Вернуться назад" />}
      />
    </>
  )
}

export default createMetadata({
  title: 'Компоненты/Responses',
  id: 'components/Responses',
  parameters: {
    docs: {
      page: mdx,
    },
  },
})
