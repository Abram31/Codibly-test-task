import { MouseEvent } from 'react';
export interface ModalWIndowProps {
  open: { id: string; open: boolean };
  changeState?: (e: MouseEvent<Element>) => void;
  closePopap?: (() => void) | undefined;
}

export enum ActionsModal {
  trigger = 'CLICK',
}

export interface ActionKindModal {
  type: ActionsModal;
  payload: boolean;
}
