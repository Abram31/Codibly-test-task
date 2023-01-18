import { useContext } from 'react';
import { MyContext } from '../../../context/context';
import module from './Table.module.scss';

export const Table = () => {
  const context = useContext(MyContext);

  return (
    <table className={module.table}>
      <thead>
        <tr className={module.wrapper_columns}>
          <th className={module.column_id}>ID</th>
          <th className={module.column_name}>Name</th>
          <th className={module.column_year}>Year</th>
        </tr>
      </thead>
      <tbody>
        {context?.data.map((good, index) => {
          return (
            <tr
              key={good.id + index}
              className={module.wrapper_row}
              style={{ backgroundColor: good.color }}
            >
              <td className={module.date}>{good.id}</td>
              <td className={module.name}>{good.name}</td>
              <td className={module.year}>{good.year}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
