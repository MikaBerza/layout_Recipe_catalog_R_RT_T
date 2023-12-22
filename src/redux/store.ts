import { configureStore } from '@reduxjs/toolkit';
import modalFormSlice from './slices/modalFormSlice';

export const store = configureStore({
  reducer: {
    modalFormSlice: modalFormSlice,
  },
});
