import { IStatus } from '@interfaces/common.interface';
import {
  Button,
  Card,
  Checkbox,
  Col,
  List,
  Modal,
  Row,
  Select,
  Typography,
} from 'antd';
import { useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';

const ns = 'admin/work/common/modalUpdateStatus';

type OptionUpdateStatus = {
  value: IStatus;
  disabled?: boolean;
  label: React.ReactNode;
};

export type ModalUpdateStatus = {
  open?: boolean;
  label?: React.ReactNode;
  status?: IStatus;
  objectSelect?: { id: string; label: React.ReactNode }[];
};

type Props = ModalUpdateStatus & {
  objectSelect?: { id: string; label: React.ReactNode }[];
  cb_close?: () => void;
  cb_confirmUpdateStatus?: (data: { ids: string[]; status: IStatus }) => void;
};

export const ModalUpdateStatus_component = (props: Props) => {
  const {
    open,
    status,
    label,
    objectSelect,
    cb_close,
    cb_confirmUpdateStatus,
  } = props;
  const { t } = useTranslation(ns);

  const optionUpdateStatus: OptionUpdateStatus[] = [
    {
      value: IStatus.WaitingActive,
      disabled: true,
      label: t(`action_waitingActive`),
    },
    {
      value: IStatus.Active,
      label: (
        <Typography.Text type={'success'}>{t('action_active')}</Typography.Text>
      ),
    },
    {
      value: IStatus.Inactive,
      label: (
        <Typography.Text type={'danger'}>
          {t('action_inactive')}
        </Typography.Text>
      ),
    },
    {
      value: IStatus.Active,
      disabled: true,
      label: t('action_waitingDelete'),
    },
  ];

  const [newStatus, setNewStatus] = useState<IStatus>();
  const [newObjectSelect, setNewObjectSelect] =
    useState<{ id: string; label: React.ReactNode }[]>();

  // TODO: feature
  const check_removeProduct = (id: string) => {
    if (newObjectSelect) {
      const newObjectSelectTemp = newObjectSelect.filter(
        (obj) => obj.id !== id,
      );
      setNewObjectSelect(newObjectSelectTemp);
    }
  };

  useEffect(() => {
    setNewObjectSelect(objectSelect);
  }, [objectSelect]);

  useEffect(() => {
    setNewStatus(status);
  }, [status, objectSelect]);

  // TODO: render
  const render_title = useMemo(() => {
    if (objectSelect && objectSelect.length === 1) {
      return `${t(`title`)} "${label}"`;
    } else {
      return `${t(`title`)} ${newObjectSelect?.length || ''} "${label}"`;
    }
  }, [t, label, objectSelect, newObjectSelect]);

  const render_object = () => {
    if (!newObjectSelect || !objectSelect) return;

    if (objectSelect.length === 1) {
      return (
        <Row style={{ width: '100%', marginTop: 20 }}>
          <Col span={12}>{objectSelect[0].label}</Col>
          <Col span={12}>
            <Select
              style={{ width: '100%' }}
              options={optionUpdateStatus}
              defaultValue={status}
              value={newStatus}
              onChange={(value) => {
                setNewStatus(value);
              }}
            />
          </Col>
        </Row>
      );
    } else {
      return (
        <>
          <Card
            style={{
              marginTop: 20,
              maxHeight: '40dvh',
              overflow: 'auto',
            }}
          >
            <List
              header={null}
              footer={null}
              dataSource={newObjectSelect}
              itemLayout="horizontal"
              renderItem={(item) => (
                <List.Item style={{ width: '100%' }}>
                  <Row style={{ width: '100%' }} justify={'space-between'}>
                    <Col span={20}>
                      <Typography.Text>{item.label}</Typography.Text>
                    </Col>
                    <Col>
                      <Checkbox
                        checked={true}
                        onClick={() => check_removeProduct(item.id)}
                      />
                    </Col>
                  </Row>
                </List.Item>
              )}
            />
          </Card>
          <Row style={{ marginTop: 20 }}>
            <Col span={12}>{t(`label_status`)}</Col>
            <Col span={12}>
              <Select
                style={{ width: '100%' }}
                options={optionUpdateStatus}
                value={newStatus}
                onChange={(value) => {
                  setNewStatus(value);
                }}
              />
            </Col>
          </Row>
        </>
      );
    }
  };

  return (
    <>
      <Modal open={open} onCancel={cb_close} footer={null}>
        <Row justify={'center'} style={{ marginTop: -20 }}>
          <Typography.Title level={5}>{render_title}</Typography.Title>
        </Row>

        <Row style={{ width: '100%' }}>
          <Col span={24}>{render_object()}</Col>
        </Row>
        <Row justify={'space-between'} style={{ marginTop: 20 }}>
          <Button onClick={cb_close}>{t('button_close')}</Button>
          <Button
            type="primary"
            onClick={() => {
              if (newObjectSelect && newStatus) {
                cb_confirmUpdateStatus &&
                  cb_confirmUpdateStatus({
                    ids: newObjectSelect.map((obj) => obj.id),
                    status: newStatus,
                  });
              }
            }}
          >
            {t('button_confirm')}
          </Button>
        </Row>
      </Modal>
    </>
  );
};
