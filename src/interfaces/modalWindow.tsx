/* eslint-disable prettier/prettier */
import { MouseEvent } from 'react';
export interface ModalWIndowProps {
  open: boolean;
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
