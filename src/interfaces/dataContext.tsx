import { Dispatch } from 'react';

export interface Goods {
  id: number;
  name: string;
  year: number;
  color: string;
  pantone_value: string;
}

export interface IdataContext {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: Goods[];
  support: {
    url: string;
    text: string;
  };
}

export enum Actions {
  UPLOAD = 'UPLOAD',
}

export interface ActionKind {
  type: Actions;
  payload: IdataContext;
}

export interface MyContextProps {
  dispatch: Dispatch<ActionKind>;
  state: IdataContext;
}
