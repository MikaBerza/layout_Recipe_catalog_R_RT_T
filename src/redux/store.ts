import { configureStore } from '@reduxjs/toolkit';
import modalCreateSlice from './slices/modalCreateSlice';

export const store = configureStore({
  reducer: {
    modalCreateSlice: modalCreateSlice,
  },
});
