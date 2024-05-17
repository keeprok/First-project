import { useEffect, useState } from 'react';
import { deleteTodo, getTodo } from '../../libs/axios/AxiosTodo';
import { TodoList } from '../../types/todo';

const Home = () => {
  const [todoData, setTodoData] = useState<TodoList[]>([]);

  const getTodoList = async () => {
    const response = await getTodo({ number: 1 });
    setTodoData(response);
  };
  useEffect(() => {
    getTodoList();
  }, []);

  const deleteData = async (idx: string) => {
    await deleteTodo({ todoId: idx });
    setTodoData(todoData.filter((todo: TodoList) => todo.idx !== idx));
  };

  return (
    <div>
      {todoData.map((todo: TodoList) => (
        <div key={todo.idx}>
          <h3>{todo.title}</h3>
          <p>{todo.content}</p>
          <button onClick={() => deleteData(todo.idx)}>delete</button>
        </div>
      ))}
    </div>
  );
};

export default Home;
