import { RootState } from '@store/store';
import { createSlice } from '@reduxjs/toolkit';
import { IPayload_open, InitialState } from './messageAntd.slice.interface';

const initialState: InitialState = {
  isOpen: false,
  type: '',
  content: '',
};

const messageAntdSlice = createSlice({
  name: 'messageAntd',
  initialState,
  reducers: {
    open: (state, action: IPayload_open) => {
      state.isOpen = true;
      state.type = action.payload.type;
      state.content = action.payload.content;
    },
    close: (state) => {
      state.isOpen = false;
      state.type = '';
      state.content = '';
    },
  },
});

export const messageAntdAction = messageAntdSlice.actions;
export const messageAntdSelect = (state: RootState) => state.messageAntd;
export const messageAntdReducer = messageAntdSlice.reducer;
