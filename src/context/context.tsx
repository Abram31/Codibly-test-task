import { createContext, ReactNode, useReducer } from 'react';
import { MyContextProps } from '../interfaces/dataContext';
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
