import CreateNewComponent_Template from '@components/template/page/createNewPage/createNewComponent.template';
import { Button, Col, Menu, MenuProps, Modal, Row, Skeleton } from 'antd';
import { ItemType, MenuItemType } from 'antd/es/menu/interface';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const ns = 'admin/work/modalSingleSelect';

type MenuItem = Required<MenuProps>['items'][number];

export type Item = {
  label: React.ReactNode;
  key: React.Key;
  icon?: React.ReactNode;
  children?: MenuItem[];
  type?: 'group';
};

export type Props = {
  title: React.ReactNode;
  style?: React.CSSProperties;
  loading?: boolean;
  isOpen: boolean;
  items: Item[];
  itemSelected?: string;
  cb_chooseItem?: (itemValue: string) => void;
  cb_close: () => void;
};

export default function ModalSingleSelect_Component(props: Props) {
  const { style, isOpen, loading, cb_close, cb_chooseItem, title, items } =
    props;

  const { t } = useTranslation(ns);

  const [itemValue, setItemValue] = useState<string>();
  const onClick_menu: MenuProps['onClick'] = ({ key }) => {
    setItemValue(key);
  };

  const btn_choose = () => {
    itemValue && cb_chooseItem && cb_chooseItem(itemValue);
  };

  return (
    <Modal
      open={isOpen}
      style={style ? style : { maxWidth: 800, top: 10 }}
      width={'90%'}
      footer={null}
      onCancel={cb_close}
    >
      <CreateNewComponent_Template
        title={title}
        form={
          loading ? (
            <Skeleton />
          ) : (
            <Menu
              style={{
                width: '100%',
                maxHeight: '60dvh',
                overflowX: 'auto',
                paddingBottom: 30,
              }}
              items={items as ItemType<MenuItemType>[]}
              onClick={onClick_menu}
            />
          )
        }
        groupButtonFooter={
          <Col span={24}>
            <Row justify={'space-between'}>
              <Button onClick={cb_close}>{t('button_close')}</Button>
              <Button onClick={btn_choose} type={'primary'}>
                {t('button_confirm')}
              </Button>
            </Row>
          </Col>
        }
      />
    </Modal>
  );
}
