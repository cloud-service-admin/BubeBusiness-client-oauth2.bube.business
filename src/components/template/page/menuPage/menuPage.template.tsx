/* eslint-disable @typescript-eslint/no-explicit-any */
import { rootConfig_Style } from '@configs/styles/rootConfig.style';
import { Button, Card, Col, Divider, Row, Typography } from 'antd';
import { Link } from 'react-router-dom';
import RowTitle_Template from '../rowTitle.template';

export type I_MenuList = {
  type?: null | 'divider';
  label?: React.ReactNode;
  href?: React.ReactNode;
  rightButtonIcon?: React.ReactNode;
  rightButtonModal?: React.ReactNode;
  onClick?: () => void;
};

type I_MenuPage_Template = {
  title: React.ReactNode;
  style?: React.CSSProperties;
  menuList: I_MenuList[];
  children?: React.ReactNode;
  cb_rightButtonModal?: (value: any) => void;
  onClick?: () => void;
};

export default function MenuPage_Template({
  title,
  menuList,
  style,
  children,
  cb_rightButtonModal,
  onClick,
}: I_MenuPage_Template) {
  let lastRow: 'divider' | 'text' = 'text';

  return (
    <Row justify={'center'}>
      <Col span={24} style={style && style}>
        <Row justify={'center'}>
          <Col
            xs={24}
            sm={20}
            md={16}
            lg={12}
            style={{
              marginTop: rootConfig_Style.margin.top.form.form,
              maxWidth: 1200,
            }}
          >
            <Card style={{ marginLeft: -5, paddingRight: -5 }}>
              <RowTitle_Template title={title} />
              <Row
                gutter={[
                  rootConfig_Style.gutter.form.row.horizontal,
                  {
                    xs: rootConfig_Style.gutter.form.row.vertical.xs,
                    lg: rootConfig_Style.gutter.form.row.vertical.lg,
                  },
                ]}
              >
                {children}
                {menuList.map((menu: any, index: number) => {
                  if (menu?.type === 'divider') {
                    const a = (
                      <Col
                        span={24}
                        key={index}
                        style={{
                          marginTop: -20,
                        }}
                      >
                        <Divider>
                          {menu.label && (
                            <Typography.Text>{menu.label}</Typography.Text>
                          )}
                        </Divider>
                      </Col>
                    );
                    lastRow = 'divider';
                    return a;
                  } else {
                    let marginTop = 0;
                    if (lastRow === 'divider') {
                      marginTop = -20;
                    }
                    const a = (
                      <Col span={24} key={index} style={{ marginTop }}>
                        <Row justify={'space-between'}>
                          <Col span={22}>
                            <Link to={menu.href} onClick={onClick}>
                              <Button
                                style={{
                                  width: '100%',
                                  display: 'flex',
                                  justifyContent: 'flex-start',
                                }}
                                type="text"
                              >
                                {menu.label}
                              </Button>
                            </Link>
                          </Col>
                          <Col
                            style={{
                              width: '100%',
                              display: 'flex',
                              justifyContent: 'flex-end',
                            }}
                            span={2}
                          >
                            {menu.rightButtonIcon && (
                              <Button
                                type="text"
                                icon={menu.rightButtonIcon}
                                onClick={() => {
                                  if (cb_rightButtonModal) {
                                    cb_rightButtonModal(menu.rightButtonModal);
                                  }
                                }}
                              />
                            )}
                          </Col>
                        </Row>
                      </Col>
                    );
                    lastRow = 'text';
                    return a;
                  }
                })}
              </Row>
            </Card>
          </Col>
        </Row>
      </Col>
    </Row>
  );
}
