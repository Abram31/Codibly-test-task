import React, { useContext, useState } from 'react';
import logo from './logo.svg';
import module from './App.module.scss';
import { Route, Router, Routes, useLocation } from 'react-router-dom';
import { MyContext, ProviderContext } from './context/context';
import { Main } from './components/Main/Main';
import { Routers } from './routers/Routers';
import { Header } from './components/Header/Header';
import { Pagination } from './components/Main/Pagination/Pagination';

function App() {
  const { state } = useContext(MyContext)!;

  // const [currentPage, setCurrentPage] = useState(1);

  return (
    <>
      <Header />
      <Routers />
      <div className={module.wrapper_pagination}>
        <Pagination
          currentPage={state.page}
          lastPage={state.total_pages}
          maxLength={state.total_pages}
          // setCurrentPage={setCurrentPage}
        />
      </div>
    </>
  );
}

export default App;
