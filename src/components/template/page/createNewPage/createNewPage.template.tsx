import { Card, Col, Row } from 'antd';

type Props = {
  createNewComponent: React.ReactNode;
  style?: React.CSSProperties;
  xs?: number;
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;
  maxWidth?: number | string;
  cardStyle?: React.CSSProperties;
};

export default function CreateNewPage_Template(props: Props) {
  const { createNewComponent, style, maxWidth, cardStyle } = props;

  return (
    <Row justify={'center'}>
      <Col span={24} style={style && style}>
        <Row justify={'center'}>
          <Col
            // xs={xs ?? 24}
            // sm={sm ?? 20}
            // md={md ?? 16}
            // xl={xl ?? 12}
            // lg={lg ?? 12}
            span={24}
            style={{
              // marginTop: rootConfig_Style.margin.top.form.form,
              maxWidth: maxWidth ?? 800,
            }}
          >
            <Card
              style={
                cardStyle
                  ? cardStyle
                  : {
                      // marginLeft: 10,s
                      // marginRight: 10,
                      paddingRight: -5,
                      paddingLeft: -5,
                    }
              }
            >
              {createNewComponent}
            </Card>
          </Col>
        </Row>
      </Col>
    </Row>
  );
}
