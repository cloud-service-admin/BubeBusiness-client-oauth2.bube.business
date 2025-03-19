import { ResultType } from '@components/component/modalResult/modalResult.component';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '@store/store';
import React from 'react';

export type InitialState = {
  changeWorkCompany: {
    open: boolean;
  };
  changeWorkBranch: {
    open: boolean;
  };
  joinCompany: {
    open: boolean;
  };
  scanQRCode: {
    open: boolean;
  };
  result: {
    open: boolean;
    status?: ResultType;
    title: React.ReactNode;
    subTitle?: React.ReactNode;
  };
};

const initialState: InitialState = {
  changeWorkCompany: {
    open: false,
  },
  changeWorkBranch: {
    open: false,
  },
  joinCompany: {
    open: false,
  },
  scanQRCode: {
    open: false,
  },
  result: {
    open: false,
    title: '',
  },
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModalIChangeWorkCompany: (state) => {
      state.changeWorkCompany.open = true;
    },
    closeModalIChangeWorkCompany: (state) => {
      state.changeWorkCompany.open = false;
    },
    openModalIChangeWorkBranch: (state) => {
      state.changeWorkBranch.open = true;
    },
    closeModalIChangeWorkBranch: (state) => {
      state.changeWorkBranch.open = false;
    },
    openModalJoinCompany: (state) => {
      state.joinCompany.open = true;
    },
    closeModalJoinCompany: (state) => {
      state.joinCompany.open = false;
    },
    openModalScanQRCode: (state) => {
      state.scanQRCode.open = true;
    },
    closeModalScanQRCode: (state) => {
      state.scanQRCode.open = false;
    },
    openModalResult: (
      state,
      action: PayloadAction<{
        status?: ResultType;
        title: React.ReactNode;
        subTitle?: React.ReactNode;
      }>,
    ) => {
      state.result = {
        open: true,
        status: action.payload.status,
        title: action.payload.title,
        subTitle: action.payload.subTitle,
      };
    },
    closeModalResult: (state) => {
      state.result.open = false;
      state.result.status = undefined;
      state.result.title = '';
      state.result.subTitle = '';
    },
  },
});

export const modalAction = modalSlice.actions;
export const modalSelect = (state: RootState) => state.modal;
export const modalReducer = modalSlice.reducer;
