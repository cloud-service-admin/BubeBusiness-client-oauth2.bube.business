import { rootConfig_Style } from '@configs/styles/rootConfig.style';
import { Col, Row } from 'antd';

type Props = {
  form: React.ReactNode;
};
export default function Form_Component_Template(props: Props) {
  const { form } = props;

  return (
    <Row
      style={{
        marginLeft: rootConfig_Style.margin.left.form.card + 10,
        marginRight: rootConfig_Style.margin.right.form.card + 10,
      }}
    >
      <Col span={24}>
        <Row
          gutter={[
            rootConfig_Style.gutter.form.row.horizontal,
            {
              xs: rootConfig_Style.gutter.form.row.vertical.xs,
              lg: rootConfig_Style.gutter.form.row.vertical.lg,
            },
          ]}
        >
          {form}
        </Row>
      </Col>
    </Row>
  );
}
