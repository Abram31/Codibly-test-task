/* eslint-disable camelcase */
/* eslint-disable @typescript-eslint/no-unused-vars */
import module from './Card.module.scss';

export const Card = () => {
  return (
    <div className={module.container}>
      <div className={module.container__card}>
        <div className={module.card}>
          <p className={module.card__first_line}>Сказочное заморское яство</p>
          <h3 className={module.card__second_line}>Нямушка</h3>
          <p className={module.card__thirty_line}>с фуа-гра</p>
          <div className={module.card__dot}>
            <span className={module.card__dot__number}>0,5</span>
            <span className={module.card__dot__size}>кг</span>
          </div>
        </div>
      </div>
      <div className={module.card__bottom_row}>
        <span className={module.bottom_row__first}>Чего сидишь? Порадуй котэ, </span>
        <span className={module.bottom_row__second}>купи</span>
      </div>
    </div>
  );
};
