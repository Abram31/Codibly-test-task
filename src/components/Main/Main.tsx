import { Table } from './Table/Table';
import module from './Main.module.scss';
import { Toaster } from 'react-hot-toast';

export const Main = () => {
  return (
    <main className={module.main}>
      <div className={module.wrapper_table}>
        <Table />
      </div>
      <Toaster position="top-center" reverseOrder={false} />
    </main>
  );
};
