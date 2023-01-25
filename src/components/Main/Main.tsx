import { useContext, useEffect, useReducer, useState } from 'react';
import { Table } from './Table/Table';
import module from './Main.module.scss';
import { MyContext, ProviderContext } from '../../context/context';
import { fetchRequest } from '../../fetch/fetchRequest';
import { Actions } from '../../interfaces/dataContext';
import { reducerGoods } from '../../context/reducer';
import { initialState } from '../../context/globalState';
import { Card } from './Card/Card';
import { Pagination } from './Pagination/Pagination';

export const Main = () => {
  const [goodsState, dispatch] = useReducer(reducerGoods, initialState);
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <main className={module.main}>
      <div className={module.wrapper_table}>
        <Table />
      </div>
      <div className={module.wrapper_pagination}>
        <Pagination
          currentPage={currentPage}
          lastPage={goodsState.total_pages}
          maxLength={goodsState.total_pages}
          setCurrentPage={setCurrentPage}
        />
      </div>
      {/* <Card /> */}
      {/* <PaginatedItems itemsPerPage={5} /> */}
    </main>
  );
};
