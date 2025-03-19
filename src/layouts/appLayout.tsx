/* eslint-disable react-hooks/exhaustive-deps */
import ModalResult_Component from '@components/component/modalResult/modalResult.component';
import Test_component from '@components/test/test.component';
import envConfig from '@configs/env/envConfig.config';
import Content_Layout from '@layouts/content/content.layout';
import { Layout, Skeleton } from 'antd';
import { Suspense } from 'react';

const APP_MODE = envConfig.VITE_APP_MODE;

export default function AppLayout() {
  // check app auth

  const renderApp = () => {
    return (
      <>
        <Layout style={{ overflow: 'hidden' }}>
          <Suspense fallback={<Skeleton />}>
            {APP_MODE === 'development' && <Test_component />}
            <Content_Layout />
          </Suspense>
        </Layout>

        <ModalResult_Component />
      </>
    );
  };

  return renderApp();
}
