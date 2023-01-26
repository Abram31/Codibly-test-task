import { URL } from '../constants/url';
import { initialState } from '../context/globalState';
import { Goods } from '../interfaces/dataContext';
import { propsGetFetch } from '../interfaces/propsGetFetch';

export const fetchRequest = async ({ numberPage, id }: propsGetFetch) => {
  if (id) {
    console.log(!!id);

    const request = await fetch(`${URL.BASE}/${id}`);
    const data = await request.json();
    const result = { ...initialState, ...data };

    return result;
  } else if (numberPage) {
    const request = await fetch(`${URL.BASE}`);
    const data = await request.json();
    return data;
  }
  const request = await fetch(`${URL.BASE}${URL.routePage}${numberPage}`);
  const data = await request.json();
  return data;
};
