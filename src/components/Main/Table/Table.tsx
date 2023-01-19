import { Fragment, SyntheticEvent, useContext, useState } from 'react';
import { MyContext } from '../../../context/context';
import { ModalWIndow } from '../ModalWIndow/ModalWIndow';
import module from './Table.module.scss';

export const Table = () => {
  const contextListGoods = useContext(MyContext);

  const [openModal, setOpenModal] = useState(false);

  const handleClickRow = (e: SyntheticEvent<Element, Event>) => {
    console.log(e);
    console.log(openModal);
    setOpenModal(!openModal);
  };
  const closePopap = () => setOpenModal(!openModal);

  return (
    <>
      <table className={module.table}>
        <thead>
          <tr className={module.wrapper_columns}>
            <th className={module.column_id}>ID</th>
            <th className={module.column_name}>Name</th>
            <th className={module.column_year}>Year</th>
          </tr>
        </thead>
        <tbody>
          {contextListGoods?.data.map((good, index) => {
            return (
              <Fragment key={good.id + index}>
                <tr
                  className={module.wrapper_row}
                  style={{ backgroundColor: good.color }}
                  onClick={handleClickRow}
                >
                  <td className={module.date}>{good.id}</td>
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
