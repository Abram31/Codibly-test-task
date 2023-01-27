import { Fragment, SyntheticEvent, useContext, useState } from 'react';
import { MyContext } from '../../../context/context';
import { ModalWIndow } from '../ModalWIndow/ModalWIndow';
import module from './Table.module.scss';

export const Table = () => {
  const { state } = useContext(MyContext)!;
  const [openModal, setOpenModal] = useState({ id: '', open: false });

  const handleClickRow = (e: SyntheticEvent<HTMLTableRowElement>) => {
    const element = e.currentTarget;
    const id = element.querySelector('.row-id')?.textContent || '';
    setOpenModal({ id: id, open: true });
  };
  const closePopap = () => setOpenModal({ id: '', open: false });

  return (
    <>
      <h3 className={module.title}>Flowers</h3>
      <table className={module.table}>
        <thead>
          <tr className={module.wrapper_columns}>
            <th className={module.column_id}>ID</th>
            <th className={module.column_name}>Name</th>
            <th className={module.column_year}>Year</th>
          </tr>
        </thead>
        <tbody>
          {state.data.map((good, index) => {
            return (
              <Fragment key={good.id + index}>
                <tr
                  className={module.wrapper_row}
                  style={{ backgroundColor: good.color }}
                  onClick={handleClickRow}
                >
                  <td className={`${module.date} row-id`}>{good.id}</td>
                  <td className={module.name}>{good.name}</td>
                  <td className={module.year}>{good.year}</td>
                </tr>
              </Fragment>
            );
          })}
        </tbody>
      </table>
      <ModalWIndow closePopap={closePopap} open={openModal} />
    </>
  );
};
