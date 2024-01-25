import { configureStore } from '@reduxjs/toolkit';
// импортируем slice (часть) состояния и действий для модальной формы
import recipeCatalogDataSlice from './slices/recipeCatalogSlice';
import modalFormSlice from './slices/modalFormSlice';

export const store = configureStore({
  reducer: {
    recipeCatalogDataSlice: recipeCatalogDataSlice,
    modalFormSlice: modalFormSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
