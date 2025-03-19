import {
  Button,
  Card,
  Checkbox,
  Col,
  List,
  Modal,
  Row,
  Typography,
} from 'antd';
import { useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';

const ns = 'admin/work/common/modalDelete';

export type IModalDelete_ObjectSelect = {
  id: string;
  label: React.ReactNode;
}[];

export type ModalConfirmDelete = {
  open: boolean;
  label: React.ReactNode;
  objectSelect: IModalDelete_ObjectSelect;
};

type Props = ModalConfirmDelete & {
  cb_close?: () => void;
  cb_confirmDelete: (data: { ids: string[] }) => void;
};

export default function ModalConfirmDelete_component(props: Props) {
  const { open, label, objectSelect, cb_close, cb_confirmDelete } = props;
  const { t } = useTranslation(ns);

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
        <>
          <Row justify={'center'} style={{ marginTop: 10 }}>
            <Typography>{objectSelect[0].label}</Typography>
          </Row>
        </>
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
        </>
      );
    }
  };

  return (
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
          onClick={() =>
            cb_confirmDelete({
              ids:
                (newObjectSelect && newObjectSelect.map((obj) => obj.id)) || [],
            })
          }
          danger
        >
          {t(`button_confirm`)}
        </Button>
      </Row>
    </Modal>
  );
}
