import IconInTitle_component from '@components/component/IconInTitle/iconInTitle.component';
import { rootConfig_Style } from '@configs/styles/rootConfig.style';
import { IStatus } from '@interfaces/common.interface';
import { Col, Row, Switch } from 'antd';
import RowTitle_Template from '../rowTitle.template';

type Props = {
  title?: React.ReactNode;
  formStatus?: 'new' | 'isDraft' | 'detail';
  showIconInTitle?: boolean;
  updateStatus?: {
    show?: boolean;
    status?: IStatus;
    cb_updateStatus?: () => void;
  };
  status?: React.ReactNode;
  form: React.ReactNode;
  groupButtonFooter?: React.ReactNode;
  overflow?: {
    show: boolean;
    maxHeight?: number;
  };
};

export default function CreateNewComponent_Template(props: Props) {
  const {
    title,
    formStatus,
    showIconInTitle,
    updateStatus,
    form,
    groupButtonFooter,
    overflow,
  } = props;

  const formStyle = overflow?.show
    ? {
        overflow: 'auto',
        maxHeight: overflow.maxHeight ? overflow.maxHeight : '65dvh',
        paddingBottom: 40,
      }
    : {};

  return (
    <>
      <form
        style={{
          width: '100%',
          height: '100dvh',
        }}
      >
        <Row>
          <Col span={24}>
            <Row
              style={
                {
                  // marginLeft: rootConfig_Style.margin.left.form.card,
                  // marginRight: rootConfig_Style.margin.right.form.card,
                }
              }
            >
              {title && (
                <Col style={{ marginTop: 5, marginBottom: 10 }} span={24}>
                  <Row style={{ width: '100%' }} align={'middle'}>
                    <Col span={4}>
                      {(showIconInTitle && formStatus && (
                        <Row
                          style={{
                            position: 'absolute',
                            top: -10,
                            left: 0,
                            rotate: '-10deg',
                          }}
                        >
                          <IconInTitle_component formStatus={formStatus} />
                        </Row>
                      )) ||
                        (showIconInTitle && !formStatus && (
                          <Row
                            style={{
                              position: 'absolute',
                              top: -10,
                              left: 0,
                              rotate: '-10deg',
                            }}
                          >
                            <IconInTitle_component formStatus={'new'} />
                          </Row>
                        ))}
                    </Col>
                    <Col span={16}>
                      <RowTitle_Template title={title} />
                    </Col>
                  </Row>
                  {updateStatus?.show &&
                    updateStatus.status &&
                    (updateStatus.status === IStatus.Active ||
                      updateStatus?.status === IStatus.Inactive) && (
                      <Row justify={'end'}>
                        <Switch
                          value={
                            updateStatus.status === IStatus.Active
                              ? true
                              : false
                          }
                          checkedChildren="Active"
                          unCheckedChildren="Inactive"
                          onChange={updateStatus.cb_updateStatus}
                        />
                      </Row>
                    )}
                </Col>
              )}
            </Row>
            <Row
              style={{
                marginLeft: rootConfig_Style.margin.left.form.card,
                marginRight: rootConfig_Style.margin.right.form.card,
                ...formStyle,
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
            <Row
              style={{
                marginLeft: rootConfig_Style.margin.left.form.card,
                marginRight: rootConfig_Style.margin.right.form.card,
              }}
            >
              <Col span={24}>
                <Row
                  style={{
                    marginTop:
                      rootConfig_Style.margin.top.form.groupButtonFooter,
                  }}
                  justify={'end'}
                >
                  {groupButtonFooter}
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
      </form>
    </>
  );
}
