import { appReducer } from '@/features/app/app.slice';
import { messageAntdReducer } from '@features/app_system/messageAntd.slice';
import { modalReducer } from '@features/app_system/modal.slice';
import { combineReducers } from '@reduxjs/toolkit';

const rootReducer = combineReducers({
  // system
  app: appReducer,
  messageAntd: messageAntdReducer,
  modal: modalReducer,
});

export type RootReducer = ReturnType<typeof rootReducer>;
export default rootReducer;
