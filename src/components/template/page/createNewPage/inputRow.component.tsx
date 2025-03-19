import { rootConfig_Style } from '@configs/styles/rootConfig.style';
import { Col, Row, Typography } from 'antd';
import TextRequired_Component from './textRequired.component';

type Props = {
  label?: React.ReactNode;
  labelDescription?: React.ReactNode;
  required?: boolean;
  numberButtonCreateNew?: number;
  buttonCreateNew?: React.ReactNode;
  input: React.ReactNode;
  inputError?: React.ReactNode;
};

export default function InputRow_Component({
  label,
  labelDescription,
  required,
  numberButtonCreateNew,
  buttonCreateNew,
  input,
  inputError,
}: Props) {
  return (
    <Col span={24}>
      <Row align={'middle'}>
        {label ? (
          <>
            <Col
              xs={rootConfig_Style.grid.form.row.col.label.xs}
              lg={rootConfig_Style.grid.form.row.col.label.lg}
            >
              <Row justify={'space-between'}>
                <Typography.Text>
                  {label}: {required && <TextRequired_Component />}{' '}
                </Typography.Text>
              </Row>
              {labelDescription && (
                <Typography.Text type={'secondary'}>
                  ({labelDescription})
                </Typography.Text>
              )}
            </Col>
            <Col
              xs={rootConfig_Style.grid.form.row.col.input.xs}
              lg={rootConfig_Style.grid.form.row.col.input.lg}
            >
              <Row justify={'space-between'}>
                {buttonCreateNew ? (
                  <>
                    <Col
                      xs={
                        numberButtonCreateNew
                          ? 24 - numberButtonCreateNew * 4
                          : 20
                      }
                      md={
                        numberButtonCreateNew
                          ? 24 - numberButtonCreateNew * 2
                          : 22
                      }
                    >
                      {input}
                    </Col>
                    <Col>{buttonCreateNew && buttonCreateNew}</Col>
                  </>
                ) : (
                  <Col span={24}>{input}</Col>
                )}
              </Row>
            </Col>
          </>
        ) : (
          <Row style={{ width: '100%' }} justify={'end'}>
            <Col
              xs={rootConfig_Style.grid.form.row.col.input.xs}
              lg={rootConfig_Style.grid.form.row.col.input.lg}
            >
              {input}
            </Col>
          </Row>
        )}

        {inputError && (
          <Typography.Text type={'danger'}>{inputError}</Typography.Text>
        )}
      </Row>
    </Col>
  );
}
