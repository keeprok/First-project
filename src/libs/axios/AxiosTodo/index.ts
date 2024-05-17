import { GetTodoPr, PatchTodoPrs, PostTodoPrs, deleteTodoPr } from '../../../types/api/apiTodo';
import { axiosInstanse } from '../instanse';

export const postTodo = async ({ title, content }: PostTodoPrs) => {
  const response = await axiosInstanse.post('/todo', {
    title,
    content,
  });
  return response.data;
};
export const getTodo = async ({ number }: GetTodoPr) => {
  const response = await axiosInstanse.get('/todo', {
    params: {
      page: number,
    },
  });
  return response.data;
};

export const patchTodo = async ({ title, content, state, todoId }: PatchTodoPrs) => {
  const response = await axiosInstanse.patch(
    `/todo`,
    {
      title,
      content,
      state,
    },
    { params: { todoId: todoId } }
  );
  return response.data;
};

export const deleteTodo = async ({ todoId }: deleteTodoPr) => {
  const response = await axiosInstanse.delete(`/todo/${todoId}`);
  return response.data;
};
