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
