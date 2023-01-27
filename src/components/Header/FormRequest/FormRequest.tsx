import { ChangeEvent, FormEvent, useContext, useState } from 'react';
import { MyContext } from '../../../context/context';
import { initialState } from '../../../context/globalState';
import { fetchRequest } from '../../../fetch/fetchRequest';
import { Actions } from '../../../interfaces/dataContext';
import module from './FormRequest.module.scss';
export const FormRequest = () => {
  const [id, setID] = useState('');
  const { dispatch } = useContext(MyContext)!;
  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const element = event.target;
    setID(element.value);
  };

  const onSubmitForm = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = await fetchRequest({ id: id });
    if (id) {
      const initial = { data: [data.data] };
      const result = { ...initialState, ...initial };
      dispatch({ type: Actions.UPID, payload: result });
    } else {
      dispatch({ type: Actions.UPLOAD, payload: data });
    }
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
          value={id}
        ></input>
        <button className={module.form__button} type="submit">
          Search
        </button>
      </fieldset>
    </form>
  );
};
