/* eslint-disable react-hooks/exhaustive-deps */
import { modalAction, modalSelect } from '@features/app_system/modal.slice';
import { useAppDispatch, useAppSelector } from '@store/hooks';
import { Modal, Result } from 'antd';
import { useEffect } from 'react';

export type ResultType =
  | 'success'
  | 'error'
  | 'info'
  | 'warning'
  | 404
  | 403
  | 500;

export default function ModalResult_Component() {
  const modalResultState = useAppSelector(modalSelect).result;
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (modalResultState.open) {
      setTimeout(() => {
        dispatch(modalAction.closeModalResult());
      }, 2000);
    }
  }, [modalResultState.open]);

  return (
    <>
      <Modal
        open={modalResultState.open}
        onCancel={() => dispatch(modalAction.closeModalResult())}
        footer={<></>}
      >
        <Result
          status={modalResultState.status || 'success'}
          title={modalResultState.title}
          subTitle={modalResultState.subTitle}
        />
      </Modal>
    </>
  );
}
