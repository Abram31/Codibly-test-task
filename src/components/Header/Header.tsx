import { FormRequest } from './FormRequest/FormRequest';
import module from './Header.module.scss';
export const Header = () => {
  return (
    <header className={module.header}>
      <div className={module.wrapper_form}>
        <FormRequest />
      </div>
    </header>
  );
};
