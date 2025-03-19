import { rootConfig_Style } from '@configs/styles/rootConfig.style';
import { Col, Row, Typography } from 'antd';
import TextRequired_Component from './textRequired.component';

type Props = {
  label1: React.ReactNode;
  input1: React.ReactNode;
  input1Required?: boolean;
  input1Error?: React.ReactNode;
  label2: React.ReactNode;
  input2: React.ReactNode;
  input2Required?: boolean;
  input2Error?: React.ReactNode;
};

export default function TwoInputRow_Component({
  label1,
  input1,
  input1Required,
  input1Error,
  label2,
  input2,
  input2Required,
  input2Error,
}: Props) {
  return (
    <Col span={24}>
      <Row
        gutter={[
          0,
          {
            xs: rootConfig_Style.gutter.form.row.vertical.xs,
            lg: rootConfig_Style.gutter.form.row.vertical.lg,
          },
        ]}
      >
        <Col xs={rootConfig_Style.grid.form.row.col.label.xs} lg={12}>
          <Row align={'middle'}>
            <Col xs={24} lg={12}>
              <Typography.Text>
                {label1}
                {input1Required && <TextRequired_Component />}:
              </Typography.Text>
            </Col>
            <Col xs={24} lg={12}>
              {input1}
            </Col>
            {input1Error && (
              <Typography.Text type="danger">{input1Error}</Typography.Text>
            )}
          </Row>
        </Col>
        <Col xs={rootConfig_Style.grid.form.row.col.label.xs} lg={12}>
          <Row align={'middle'}>
            <Col xs={24} lg={10}>
              <Typography.Text>
                {label2}
                {input2Required && <TextRequired_Component />}:
              </Typography.Text>
            </Col>
            <Col xs={24} lg={14}>
              {input2}
            </Col>
            {input2Error && (
              <Typography.Text type="danger">{input2Error}</Typography.Text>
            )}
          </Row>
        </Col>
      </Row>
    </Col>
  );
}
