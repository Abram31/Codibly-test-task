/* eslint-disable camelcase */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useMemo, useState } from 'react';
import { fetchRequest } from '../../../../fetch/fetchRequest';
import { Card } from '../../Card/Card';
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
export const ModalWindowBody = ({
  id,
  onClick,
}: {
  id: number;
  onClick: (() => void) | undefined;
}) => {
  const [dataState, setDataState] = useState<ModalWindowProps>();
  const [colorState, setColorState] = useState<string[]>();

  useEffect(() => {
    const response: Promise<ModalWindowProps> = fetchRequest({ page: String(id) });
    response.then((data) => {
      console.log(data);
      setColorState(Object.keys(data.data).map(() => randomColor()));
      setDataState(data);
    });
  }, []);

  return (
    <div className={module.container}>
      <div className={module.row} style={{ backgroundColor: colorState && colorState[0] }}>
        {dataState?.data.id}
      </div>
      <div className={module.row} style={{ backgroundColor: colorState && colorState[1] }}>
        {dataState?.data.name}
      </div>
      <div className={module.row} style={{ backgroundColor: colorState && colorState[2] }}>
        {dataState?.data.year}
      </div>
      <div className={module.row} style={{ backgroundColor: colorState && colorState[3] }}>
        {dataState?.data.color}
      </div>
      <div className={module.row} style={{ backgroundColor: colorState && colorState[4] }}>
        {dataState?.data.pantone_value}
      </div>
    </div>
  );
};
