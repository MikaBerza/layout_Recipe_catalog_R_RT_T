import { createSlice } from '@reduxjs/toolkit';
import { CatalogDataInitialStateType } from '../../types/customType';

// первое состояние
const initialState: CatalogDataInitialStateType = {
  recipeCatalogData: [],
  isLoading: false,
  isErrors: false,
};

export const recipeCatalogDataSlice = createSlice({
  name: 'recipeCatalogData',
  initialState,
  reducers: {
    setRecipeCatalogData(state, action) {
      state.recipeCatalogData = action.payload;
    },
    setIsLoading(state, action) {
      state.isLoading = action.payload;
    },
    setIsErrors(state, action) {
      state.isErrors = action.payload;
    },
  },
});

export const { setRecipeCatalogData, setIsLoading, setIsErrors } =
  recipeCatalogDataSlice.actions;
export default recipeCatalogDataSlice.reducer;
