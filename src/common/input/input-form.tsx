import { inputForm } from '../../types/todo';

export const InputForm = ({ type, name, text, id, placeholder }: inputForm) => {
  return (
    <label>
      {text} :<input type={type} id={id} name={name} placeholder={placeholder}></input>
    </label>
  );
};
