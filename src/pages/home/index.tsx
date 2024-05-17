import { useEffect, useState } from 'react';
import { deleteTodo, getTodo, patchTodo } from '../../libs/axios/AxiosTodo';
import { TodoList } from '../../types/todo';
import { InputForm } from '../../common/input/input-form';

const Home = () => {
  const [todoData, setTodoData] = useState<TodoList[]>([]);
  const [isPatch, setIsPatch] = useState<boolean>(false);
  const [patchData, setPatchData] = useState<TodoList>({ idx: '', title: '', content: '' });

  const getTodoList = async () => {
    const response = await getTodo({ number: 1 });
    setTodoData(response);
    console.log(response);
  };
  useEffect(() => {
    getTodoList();
  }, []);

  const deleteData = async (idx: string) => {
    await deleteTodo({ todoId: idx });
    setTodoData(todoData.filter((todo: TodoList) => todo.idx !== idx));
  };

  const isOpenInput = (todo: TodoList) => {
    setIsPatch(true);
    setPatchData(todo);
  };

  const handlePatch: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const $title = form.elements.namedItem('title') as HTMLFormElement | null;
    const $content = form.elements.namedItem('content') as HTMLFormElement | null;
    if (!$title || !$content) return;
    const updateData = {
      todoId: patchData.idx,
      title: $title.value,
      content: $content.value,
      state: 'false',
    };
    patchTodo(updateData);
    getTodoList();
    setIsPatch(false);
  };
  return (
    <div>
      {todoData.map((todo: TodoList) => (
        <div key={todo.idx}>
          <h3>{todo.title}</h3>
          <p>{todo.content}</p>
          <button onClick={() => deleteData(todo.idx)}>delete</button>
          <button onClick={() => isOpenInput(todo)}>수정</button>
        </div>
      ))}
      {isPatch && (
        <form onSubmit={handlePatch}>
          <InputForm text="email" type="text" id="title" name="title" placeholder={patchData.title} />
          <InputForm text="email" type="text" id="content" name="content" placeholder={patchData.content} />
          <button type="submit">완료</button>
        </form>
      )}
    </div>
  );
};

export default Home;
