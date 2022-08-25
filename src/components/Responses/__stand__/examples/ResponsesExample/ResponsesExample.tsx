import { Button } from '@consta/uikit/Button';
import React from 'react';

import { Responses403 } from '##/components/Responses403';
import { Responses404 } from '##/components/Responses404';
import { Responses500 } from '##/components/Responses500';
import { Responses503 } from '##/components/Responses503';
import { ResponsesConnectionError } from '##/components/ResponsesConnectionError';
import { ResponsesDeleted } from '##/components/ResponsesDeleted';
import { ResponsesEmpty } from '##/components/ResponsesEmpty';
import { ResponsesNothingFound } from '##/components/ResponsesNothingFound';
import { ResponsesSuccess } from '##/components/ResponsesSuccess';

export const ExampleResponses403 = () => {
  return (
    <div>
      <Responses403 size="m" />
    </div>
  );
};

export const ExampleResponses404 = () => {
  return (
    <div>
      <Responses404 size="m" />
    </div>
  );
};

export const ExampleResponses500 = () => {
  return (
    <div>
      <Responses500 size="m" />
    </div>
  );
};

export const ExampleResponses503 = () => {
  return (
    <div>
      <Responses503 size="m" />
    </div>
  );
};

export const ExampleResponsesConnectionError = () => {
  return (
    <div>
      <ResponsesConnectionError size="m" />
    </div>
  );
};

export const ExampleResponsesEmpty = () => {
  return (
    <div>
      <ResponsesEmpty size="m" />
    </div>
  );
};

export const ExampleResponsesDeleted = () => {
  return (
    <div>
      <ResponsesDeleted size="m" />
    </div>
  );
};

export const ExampleResponsesNothingFound = () => {
  return (
    <div>
      <ResponsesNothingFound size="m" />
    </div>
  );
};

export const ExampleResponsesSuccess = () => {
  return (
    <div>
      <ResponsesSuccess size="m" />
    </div>
  );
};

export const ExampleResponsesText = () => {
  return (
    <div>
      <ResponsesSuccess
        size="m"
        title="Всё готово"
        description="Можно двигаться дальше: сначала два шага направо, потом четыре налево, и всё — только вперёд!"
      />
    </div>
  );
};

export const ExampleResponsesActions = () => {
  return (
    <div>
      <ResponsesSuccess
        size="m"
        title="Всё готово"
        description="Можно двигаться дальше: сначала два шага направо, потом четыре налево, и всё — только вперёд!"
        actions={<Button size="m" view="ghost" label="Ура, я уже бегу" />}
      />
    </div>
  );
};
