/* eslint-disable react-hooks/exhaustive-deps */

import {
  messageAntdAction,
  messageAntdSelect,
} from '@features/app_system/messageAntd.slice';
import { useAppSelector, useAppDispatch } from '@store/hooks';
import { App } from 'antd';
import { useEffect } from 'react';

export default function MessageAntd_Component() {
  const messageAntdState = useAppSelector(messageAntdSelect);

  const { message } = App.useApp();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (messageAntdState.isOpen) {
      switch (messageAntdState.type) {
        case 'info':
          message.info(messageAntdState.content);
          break;
        case 'success':
          message.success(messageAntdState.content);
          break;
        case 'error':
          message.error(messageAntdState.content);
          break;
        default:
          message.info(messageAntdState.content);
          break;
      }

      dispatch(messageAntdAction.close());
    }
  }, [messageAntdState.isOpen]);

  return <></>;
}
