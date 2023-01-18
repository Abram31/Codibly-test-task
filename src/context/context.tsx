import { createContext } from 'react';
import { IdataContext } from '../interfaces/dataContext';

export const MyContext = createContext<IdataContext | undefined>(undefined);
