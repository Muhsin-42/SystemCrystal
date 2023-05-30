import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

import authReducer from './Redux/store';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER
} from "redux-persist";
import { PersistGate } from 'redux-persist/integration/react';
import storage from "redux-persist/lib/storage";

const persistConfig = { key: "root", storage, version : 1};
const persistedReducer = persistReducer(persistConfig,authReducer);
const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
          serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
          },
        }),
});
      
      


ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistStore(store)}>
      <React.StrictMode>
          <App />
      </React.StrictMode>,
    </PersistGate>
  </Provider>
)
