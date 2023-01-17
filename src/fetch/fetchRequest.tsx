import { URL } from '../constants/url';
import { propsGetFetch } from '../interfaces/propsGetFetch';

export const fetchRequest = async ({ page }: propsGetFetch) => {
  const request = await fetch(`${URL.BASE}/${page}`);
  const data = await request.json();
  return data;
};
