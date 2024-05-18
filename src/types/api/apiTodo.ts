export type PostTodoPrs = {
  title: string;
  content: string;
};
export type GetTodoPr = {
  number: number;
};
export type PatchTodoPrs = {
  title: string;
  content: string;
  state: string;
  todoId: string;
};
export type DeleteTodoPr = {
  todoId: string;
};
