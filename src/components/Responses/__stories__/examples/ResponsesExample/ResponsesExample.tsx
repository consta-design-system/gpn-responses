import { Button } from '@consta/uikit/Button';
import React from 'react';

import { Responses403 } from '../../../../Responses403/Responses403';
import { Responses404 } from '../../../../Responses404/Responses404';
import { Responses500 } from '../../../../Responses500/Responses500';
import { Responses503 } from '../../../../Responses503/Responses503';
import { ResponsesConnectionError } from '../../../../ResponsesConnectionError/ResponsesConnectionError';
import { ResponsesDeleted } from '../../../../ResponsesDeleted/ResponsesDeleted';
import { ResponsesEmpty } from '../../../../ResponsesEmpty/ResponsesEmpty';
import { ResponsesNothingFound } from '../../../../ResponsesNothingFound/ResponsesNothingFound';
import { ResponsesSuccess } from '../../../../ResponsesSuccess/ResponsesSuccess';

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
