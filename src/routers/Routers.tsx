import React, { useContext, useEffect } from 'react';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { Header } from '../components/Header/Header';
import { Main } from '../components/Main/Main';
import { URL } from '../constants/url';
import { MyContext, ProviderContext } from '../context/context';
import { fetchRequest } from '../fetch/fetchRequest';
import { Actions } from '../interfaces/dataContext';

export const Routers = () => {
  const { state, dispatch } = useContext(MyContext)!;
  const { pathname } = useLocation();
  const navigation = useNavigate();
  const path = pathname.slice(1, pathname.length);
  useEffect(() => {
    if (path !== '') {
      console.log(path);
      console.log(typeof path);
      (async () => {
        const data = await fetchRequest({ numberPage: path });
        console.log(data);

        dispatch({ payload: data, type: Actions.UPLOAD });
      })();
    } else {
      navigation(URL.startPage);
      (async () => {
        const data = await fetchRequest({ numberPage: '' });
        console.log(data);
        dispatch({ payload: data, type: Actions.UPLOAD });
      })();
    }
  }, []);
  return (
    <Routes>
      <Route path={`/${state.page}`} element={<Main />}></Route>
    </Routes>
  );
};
