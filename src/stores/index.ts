'use client';

import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { authReducer } from './reducers/auth';
import { layoutReducer } from './reducers/layout';

const rootReducer = combineReducers({
  user: authReducer,
  layout: layoutReducer,
});

const setupStore = () => {
  const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false,
      }),
    devTools: process.env.NODE_ENV !== 'production',
  });

  return store;
};

export const globalStore = setupStore();

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
