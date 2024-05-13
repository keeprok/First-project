import { Outlet, createBrowserRouter } from 'react-router-dom';

import Home from '../../pages/home';
import AddTodo from '../../pages/addTodo';

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
    ],
  },
]);
//못하는거 1. 사용자 인증 즉 token값처럼 확인된 값이 있어야만 갈수잇는 페이지를 구별하는법을 못함
