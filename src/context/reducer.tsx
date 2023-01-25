import { Reducer } from 'react';
import { ActionKind, Actions, IdataContext } from '../interfaces/dataContext';
import { ActionKindModal, ActionsModal, ModalWIndowProps } from '../interfaces/modalWindow';

export const reducerGoods: Reducer<IdataContext, ActionKind> = (state, action) => {
  switch (action.type) {
    case Actions.UPLOAD:
      return { ...state, data: [...action.payload.data] };
    default:
      return state;
  }
};

// export const reducerModalWindow: Reducer<ModalWIndowProps, ActionKindModal> = (state, action) => {
//   switch (action.type) {
//     case ActionsModal.trigger:
//       return { open: !action.payload };
//     default:
//       return state;
//   }
// };
