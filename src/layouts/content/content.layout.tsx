import { Content } from 'antd/es/layout/layout';
import { Outlet } from 'react-router-dom';

export default function Content_Layout() {
  return (
    <>
      {/* <Row style={{ height: '50px' }} /> */}
      <Content
        style={{
          height: `100dvh`,
          // overflow: 'auto',
          // overflowX: 'hidden',
          // paddingLeft: 10,
          // paddingRight: 10,
          // paddingBottom: 100,
        }}
      >
        <Outlet />
      </Content>
    </>
  );
}
