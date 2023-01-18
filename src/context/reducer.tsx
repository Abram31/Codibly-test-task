import { Reducer } from 'react';
import { ActionKind, Actions, IdataContext } from '../interfaces/dataContext';

export const reducerGoods: Reducer<IdataContext, ActionKind> = (state, action) => {
  switch (action.type) {
    case Actions.UPLOAD:
      return { ...state, data: [...action.payload.data] };
    default:
      return state;
  }
};
