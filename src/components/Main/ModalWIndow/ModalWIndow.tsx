import Popup from 'reactjs-popup';
// import 'reactjs-popup/dist/index.css';
import { ModalWIndowProps } from '../../../interfaces/modalWindow';
import { ModalWindowBody } from './ModalWindowBody/ModalWindowBody';

export const ModalWIndow = ({ open, closePopap }: ModalWIndowProps) => {
  return (
    <Popup open={open} onClose={closePopap} position="right center">
      {<ModalWindowBody />}
    </Popup>
  );
};
