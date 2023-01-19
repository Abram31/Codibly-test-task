import { createContext, ReactNode, useReducer } from 'react';
import { IdataContext } from '../interfaces/dataContext';
import { ActionsModal, ModalWIndowProps } from '../interfaces/modalWindow';
import { reducerModalWindow } from './reducer';

export const MyContext = createContext<IdataContext | undefined>(undefined);

const initialStateModal = { open: false };

export const ContextOpenModal = createContext<ModalWIndowProps>(initialStateModal);

export const ProviderContextModal = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(reducerModalWindow, initialStateModal);
  const value = {
    open: state.open,
    changeState: () => {
      dispatch({ type: ActionsModal.trigger, payload: state.open });
    },
  };
  return <ContextOpenModal.Provider value={value}>{children}</ContextOpenModal.Provider>;
};
