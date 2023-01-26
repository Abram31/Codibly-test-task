import { toast } from 'react-hot-toast';
import { URL } from '../constants/url';
import { initialState } from '../context/globalState';
import { Goods } from '../interfaces/dataContext';
import { propsGetFetch } from '../interfaces/propsGetFetch';

export const fetchRequest = async ({ numberPage, id }: propsGetFetch) => {
  if (id) {
    console.log(!!id);

    const request = await fetch(`${URL.BASE}/${id}`);
    if (!request.ok) toast.error('Element not found');
    const data = await request.json();
    const result = { ...initialState, ...data };

    return result;
  }
  const request = await fetch(`${URL.BASE}${URL.routePage}${numberPage}`);
  if (!request.ok) toast.error('Page not found');
  const data = await request.json();
  return data;
};
