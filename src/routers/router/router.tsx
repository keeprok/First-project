import { Outlet, createBrowserRouter } from 'react-router-dom';

import Home from '../../pages/home';
import AddTodo from '../../pages/addTodo';
import Todo from '../../pages/crud/todo';
import SignUp from '../../pages/sign/sign-up';
import SignIn from '../../pages/sign/sign-in';

export const Router = createBrowserRouter([
  {
    path: '',
    element: <Outlet />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/AddTodo',
        element: <AddTodo />,
      },
      {
        path: '/Todo',
        element: <Todo />,
      },
      {
        path: '/SignUp',
        element: <SignUp />,
      },
      {
        path: '/SignIn',
        element: <SignIn />,
      },
    ],
  },
]);
//못하는거 1. 사용자 인증 즉 token값처럼 확인된 값이 있어야만 갈수잇는 페이지를 구별하는법을 못함
