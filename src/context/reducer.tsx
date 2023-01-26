import { Reducer } from 'react';
import { ActionKind, Actions, IdataContext } from '../interfaces/dataContext';
import { ActionKindModal, ActionsModal, ModalWIndowProps } from '../interfaces/modalWindow';

export const reducerGoods: Reducer<IdataContext, ActionKind> = (state, action) => {
  switch (action.type) {
    case Actions.UPLOAD:
      return { ...state, ...action.payload };
    case Actions.UPID:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
