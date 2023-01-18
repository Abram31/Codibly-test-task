import { useEffect, useReducer } from 'react';
import { Table } from './Table/Table';
import module from './Main.module.scss';
import { MyContext } from '../../context/context';
import { fetchRequest } from '../../fetch/fetchRequest';
import { Actions } from '../../interfaces/dataContext';
import { reducerGoods } from '../../context/reducer';
import { initialState } from '../../context/globalState';

export const Main = () => {
  const [goodsState, dispatch] = useReducer(reducerGoods, initialState);

  useEffect(() => {
    fetchRequest({ page: '' }).then((data) => {
      dispatch({ type: Actions.UPLOAD, payload: data });
      console.log(goodsState);
    });
  }, []);
  return (
    <MyContext.Provider value={goodsState}>
      <main className={module.main}>
        <div className={module.wrapper_table}>
          <Table />
        </div>
      </main>
    </MyContext.Provider>
  );
};
