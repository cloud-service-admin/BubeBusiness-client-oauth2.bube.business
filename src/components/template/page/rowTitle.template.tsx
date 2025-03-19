import { rootConfig_Style } from '@configs/styles/rootConfig.style';
import { Row, Typography } from 'antd';

type Props = {
  title: React.ReactNode;
};

export default function RowTitle_Template({ title }: Props) {
  return (
    <>
      <Row
        style={{
          marginTop: rootConfig_Style.margin.top.form.title,
          display: 'flex',
          justifyContent: 'center',
          textAlign: 'center',
        }}
        justify={'center'}
      >
        <Typography.Title level={5}>{title}</Typography.Title>
      </Row>
    </>
  );
}
