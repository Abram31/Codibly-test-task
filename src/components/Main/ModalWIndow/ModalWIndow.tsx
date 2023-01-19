import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import './ModalWIndow.scss';
import { ModalWIndowProps } from '../../../interfaces/modalWindow';
import { ModalWindowBody } from './ModalWindowBody/ModalWindowBody';

export const ModalWIndow = ({ open, closePopap }: ModalWIndowProps) => {
  return (
    <div className="wrapper-modal">
      <Popup
        lockScroll={true}
        open={open}
        closeOnDocumentClick={true}
        onClose={() => {
          closePopap && closePopap();
        }}
        position="top center"
      >
        {
          <ModalWindowBody
            onClick={() => {
              closePopap && closePopap();
              return open;
            }}
            id={2}
          />
        }
      </Popup>
    </div>
  );
};
