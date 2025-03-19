import { Button, Col, Modal, Row } from 'antd';

type Props = {
  style?: React.CSSProperties;
  open: boolean;
  form: React.ReactNode;
  buttonGroupFooter?: React.ReactNode;
  removeCloseIcon?: boolean;
  cb_close?: () => void;
};

export default function ModalCreateNewWithCloseButton_Component(props: Props) {
  const { style, open, form, buttonGroupFooter, cb_close } = props;

  return (
    <Modal
      style={{ ...style, maxWidth: 800, top: 20 }}
      width={'90%'}
      open={open}
      footer={null}
      closeIcon={false}
      onCancel={cb_close}
    >
      {form}
      <Row justify={'space-between'} style={{ width: '100%' }}>
        <Col>
          <Row justify={'start'}>
            <Col>
              <Button onClick={cb_close}>{`Đóng`}</Button>
            </Col>
          </Row>
        </Col>
        {buttonGroupFooter}
      </Row>
    </Modal>
  );
}
