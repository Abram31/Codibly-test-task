import { createContext, Dispatch, ReactNode, useReducer } from 'react';
import { ActionKind, IdataContext, MyContextProps } from '../interfaces/dataContext';
import { ActionsModal, ModalWIndowProps } from '../interfaces/modalWindow';
import { initialState } from './globalState';
import { reducerGoods } from './reducer';

export const MyContext = createContext<MyContextProps | undefined>(undefined);

export const ProviderContext = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(reducerGoods, initialState);
  const value = {
    dispatch: dispatch,
    state: state,
  };
  return <MyContext.Provider value={value}>{children}</MyContext.Provider>;
};
