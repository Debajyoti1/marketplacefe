import { configureStore } from '@reduxjs/toolkit';
import { notificationReducer } from './reducers/notificationReducer';
import { sellerReducer } from './reducers/sellerReducer';

export const store = configureStore({
  reducer: {
    notificationReducer, sellerReducer
  },
});
