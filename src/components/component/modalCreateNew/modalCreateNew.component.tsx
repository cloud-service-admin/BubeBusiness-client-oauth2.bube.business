import { Modal } from 'antd';

type Props = {
  style?: React.CSSProperties;
  open: boolean;
  form: React.ReactNode;
  removeCloseIcon?: boolean;
  cb_close?: () => void;
};

export default function ModalCreateNew_Component(props: Props) {
  const { style, open, form, cb_close } = props;

  return (
    <Modal
      style={style ? style : { maxWidth: 800, top: 20 }}
      width={'90%'}
      open={open}
      footer={null}
      closeIcon={false}
      onCancel={cb_close}
    >
      {form}
    </Modal>
  );
}
