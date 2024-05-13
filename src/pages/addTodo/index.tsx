import { InputForm } from '../../common/input/input-form';

const AddTodo = () => {
  return (
    <div>
      <form>
        <InputForm text="제 목" type="text" id="title" name="title" />
        <InputForm text="할 일" type="text" id="content" name="content" />
        <button type="submit">추가하기 </button>
      </form>
    </div>
  );
};
export default AddTodo;
