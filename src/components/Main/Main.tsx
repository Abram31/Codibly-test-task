import { Table } from './Table/Table';
import module from './Main.module.scss';

export const Main = () => {
  return (
    <main className={module.main}>
      <div className={module.wrapper_table}>
        <Table />
      </div>
    </main>
  );
};
