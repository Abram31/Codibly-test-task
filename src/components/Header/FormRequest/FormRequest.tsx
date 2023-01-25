import React, { ChangeEvent, FormEvent, useState } from 'react';
import { fetchRequest } from '../../../fetch/fetchRequest';
import module from './FormRequest.module.scss';
export const FormRequest = () => {
  const [numberPage, setNumber] = useState('');
  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const element = event.target;
    setNumber(element.value);
  };

  const onSubmitForm = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // const data = await fetchRequest({ page: numberPage });
    // console.log(data);
  };
  return (
    <form className={module.form} action="" onSubmit={onSubmitForm}>
      <fieldset className={module.form_fieldset}>
        <legend className={module.form__legend}>Searching</legend>
        <input
          className={module.form__input}
          onChange={onChangeHandler}
          id="search"
          type="number"
          min="1"
          value={numberPage}
        ></input>
        <button className={module.form__button} type="submit">
          Search
        </button>
      </fieldset>
    </form>
  );
};
