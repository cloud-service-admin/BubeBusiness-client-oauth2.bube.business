import { appInitConfig } from '@configs/appInit/appInit.config';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from '@store/store';
import { IAppRouterType, IThemeMode } from './app.slice.interface';

export type AppState = {
  loadingApp: boolean;
  appRouterType: IAppRouterType;
  lastPath?: string;
  settings: {
    themeMode: IThemeMode;
    language: string;
  };
};

const initialState: AppState = {
  loadingApp: false,
  appRouterType: IAppRouterType.Public,
  lastPath: '',
  settings: {
    themeMode: IThemeMode.Light,
    language: appInitConfig.setting.defaultLanguage,
  },
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    loadingApp: (state, action: PayloadAction<boolean>) => {
      state.loadingApp = action.payload;
    },
    loadingAppSuccess: (state) => {
      state.loadingApp = true;
    },
    updateThemeMode: (state, action: PayloadAction<IThemeMode>) => {
      state.settings.themeMode = action.payload;
    },
    updateAppRouterType: (state, action: PayloadAction<IAppRouterType>) => {
      state.appRouterType = action.payload;
    },
    updateLastPath: (state, action: PayloadAction<string>) => {
      state.lastPath = action.payload;
    },
  },
});

export const appActions = appSlice.actions;
export const appSelect = (state: RootState) => state.app;
export const appReducer = appSlice.reducer;
