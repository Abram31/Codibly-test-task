import { URL } from '../constants/url';
import { propsGetFetch } from '../interfaces/propsGetFetch';

export const fetchRequest = async ({ numberPage }: propsGetFetch) => {
  const request = await fetch(`${URL.BASE}?page=${numberPage}`);
  const data = await request.json();
  return data;
};
