import { inputForm } from '../../types/todo';

export const InputForm = ({ type, name, text, id }: inputForm) => {
  return (
    <label>
      {text} :<input type={type} id={id} name={name}></input>
    </label>
  );
};
