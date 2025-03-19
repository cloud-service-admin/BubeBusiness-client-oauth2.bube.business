import envConfig from '@configs/env/envConfig.config';
import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './rootReducer';
import rootSaga from './rootSaga';

const APP_MODE = envConfig.VITE_APP_MODE;

let devTools = false;

if (
  APP_MODE === 'development' ||
  APP_MODE === 'test' ||
  APP_MODE === 'test-development'
) {
  devTools = true;
} else {
  devTools = false;
}

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];

export const store = configureStore({
  reducer: rootReducer,
  middleware,
  devTools: devTools,
});

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
