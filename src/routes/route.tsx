import MessageAntd_Component from '@components/component/messageAntd/messageAntd.component';
import NotFound404_Page from '@components/pages/404';
import AppLayout from '@layouts/appLayout';
import Oauth2WorkEmployeePage from '@pages/oauth2.work.employee.page';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import pathRouterDefine from './pathRouter.define';

const router = createBrowserRouter(
  [
    {
      element: <AppLayout />,
      children: [
        {
          path: pathRouterDefine.work.children.employee.fullPath,
          element: <Oauth2WorkEmployeePage />,
        },
        {
          path: '*',
          element: <NotFound404_Page />,
        },
      ],
    },
  ],
  {
    future: {
      v7_relativeSplatPath: true, // 🔥 Bật cờ future cho v7
    },
  },
);

export default function RootRoute() {
  return (
    <>
      <RouterProvider router={router} />
      <MessageAntd_Component />
    </>
  );
}
