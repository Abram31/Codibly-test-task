import { useEffect, useState } from 'react';
import { fetchRequest } from '../../../../fetch/fetchRequest';
import module from './ModalWindowBody.module.scss';
import { randomColor } from './randomColor';

interface ModalWindowProps {
  data: {
    id: number;
    name?: string;
    year?: number;
    color?: string;
    pantone_value?: string;
  };
}
export const ModalWindowBody = ({ id }: { id: number; onClick: (() => void) | undefined }) => {
  const [dataState, setDataState] = useState<ModalWindowProps>();
  const [colorState, setColorState] = useState<string[]>();

  useEffect(() => {
    (async () => {
      const response = await fetchRequest({ id: String(id) });
      setDataState(response);
      setColorState(Object.keys(response.data).map(() => randomColor()));
    })();
  }, []);

  return (
    <div className={module.container}>
      <h3 className={module.title}>Flower</h3>
      <div className={module.row} style={{ backgroundColor: colorState && colorState[0] }}>
        <span>ID:</span>
        {dataState?.data.id}
      </div>
      <div className={module.row} style={{ backgroundColor: colorState && colorState[1] }}>
        <span>NAME:</span>
        {dataState?.data.name}
      </div>
      <div className={module.row} style={{ backgroundColor: colorState && colorState[2] }}>
        <span>YEAR:</span>
        {dataState?.data.year}
      </div>
      <div className={module.row} style={{ backgroundColor: colorState && colorState[3] }}>
        <span>COLOR:</span>
        {dataState?.data.color}
      </div>
      <div className={module.row} style={{ backgroundColor: colorState && colorState[4] }}>
        <span>VALUE:</span>
        {dataState?.data.pantone_value}
      </div>
    </div>
  );
};
