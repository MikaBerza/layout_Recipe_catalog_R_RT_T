import { configureStore } from '@reduxjs/toolkit';
import recipeCatalogDataSlice from './slices/recipeCatalogSlice';
import modalFormSlice from './slices/modalFormSlice';

export type AppDispatch = typeof store.dispatch;

export const store = configureStore({
  reducer: {
    recipeCatalogDataSlice: recipeCatalogDataSlice,
    modalFormSlice: modalFormSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
