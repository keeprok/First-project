import { useState } from 'react';

const Home = () => {
  const [todos, setTodos] = useState([
    { id: 1, title: 'mobi', content: 'zizont성용' },
    { id: 2, title: 'mobi', content: '운영진4명' },
    { id: 3, title: 'mobi', content: '선생님2명' },
    { id: 4, title: 'mobi', content: '술술술2명' },
    { id: 5, title: 'mobi', content: 'Riel' },
  ]);

  const delTodo = (id: Number) => {
    setTodos(todos.filter((todos) => todos.id != id));
  };

  return (
    <div>
      {todos.map((data) => {
        return (
          <div id={`${data.id}}`}>
            <label>
              Title :<div>{data.title}</div>
            </label>
            <label>
              Detail :<div>{data.content}</div>
            </label>
            <button onClick={() => delTodo(data.id)}>삭제</button>
            <button>수정</button>
          </div>
        );
      })}
    </div>
  );
};
export default Home;
