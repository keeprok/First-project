import { InputForm } from '../../common/input/input-form';
import { postTodo } from '../../libs/axios/AxiosTodo';

const AddTodo = () => {
  const onSumit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const $title = form.elements.namedItem('title') as HTMLFormElement | null;
    const $content = form.elements.namedItem('content') as HTMLFormElement | null;
    if (!$title || !$content) return;
    const newData = {
      title: $title.value,
      content: $content.value,
    };

    postTodo(newData);
  };

  return (
    <div>
      <form onSubmit={onSumit}>
        <InputForm text="제 목" type="text" id="title" name="title" />
        <InputForm text="할 일" type="text" id="content" name="content" />
        <button type="submit">추가하기 </button>
      </form>
    </div>
  );
};
export default AddTodo;
