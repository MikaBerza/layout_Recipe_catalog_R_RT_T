import { configureStore } from '@reduxjs/toolkit';
// импортируем slice (часть) состояния и действий для модальной формы
import recipeCatalogDataSlice from './slices/recipeCatalogSlice';
import modalFormSlice from './slices/modalFormSlice';
import searchSlice from './slices/searchSlice';

export const store = configureStore({
  reducer: {
    recipeCatalogDataSlice: recipeCatalogDataSlice,
    modalFormSlice: modalFormSlice,
    searchSlice: searchSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
