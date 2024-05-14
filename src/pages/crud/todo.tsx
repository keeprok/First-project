import { useState } from 'react';
import { InputForm } from '../../common/input/input-form';

const Todo = () => {
  const [todos, setTodos] = useState([
    { id: 1, title: 'mobi', content: 'zizont성용' },
    { id: 2, title: 'mobi', content: '운영진4명' },
    { id: 3, title: 'mobi', content: '선생님2명' },
    { id: 4, title: 'mobi', content: '술술술2명' },
    { id: 5, title: 'mobi', content: 'Riel' },
  ]);

  const newTodo: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    const data = e.currentTarget;
    const $title = data.elements.namedItem('title') as HTMLFormElement | null;
    const $content = data.elements.namedItem('content') as HTMLFormElement | null;
    if (!$title || !$content) return;
    const newData = {
      id: Math.floor(Math.random() * 10000),
      title: $title.value,
      content: $content.value,
    };
    setTodos((prev) => [...prev, newData]);
  };
  const delTodo = (id: number) => {
    setTodos(todos.filter((todos) => todos.id != id));
  };

  return (
    <div>
      {todos.map((data) => {
        return (
          <div key={data.id}>
            <label>
              Title :<div>{data.title}</div>
            </label>
            <label>
              Detail :<div>{data.content}</div>
            </label>
            <button onClick={() => delTodo(data.id)}>삭제</button>
            {/* <button onClick={}>수정</button> */}
          </div>
        );
      })}
      <form onSubmit={newTodo}>
        <InputForm type="text" name="title" id="tite" text="제 목 :" />
        <InputForm type="text" name="content" id="content" text="내 용 :" />
        <button type="submit"> 입력</button>
      </form>
    </div>
  );
};
export default Todo;
//수정 넣을예정
