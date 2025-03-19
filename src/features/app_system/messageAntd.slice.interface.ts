import { PayloadAction } from '@reduxjs/toolkit';

export type InitialState = {
  isOpen: boolean;
  type: 'error' | 'success' | 'info' | '';
  content?: string;
};

export type IPayload_open = PayloadAction<
  Pick<InitialState, 'type' | 'content'>
>;
