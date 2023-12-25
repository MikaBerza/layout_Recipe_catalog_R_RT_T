import { createSlice } from '@reduxjs/toolkit';
import { CatalogDataInitialStateType } from '../../types/customType';

// первое состояние
const initialState: CatalogDataInitialStateType = {
  recipeCatalogData: [],
};

export const recipeCatalogDataSlice = createSlice({
  name: 'recipeCatalogData',
  initialState,
  reducers: {
    setRecipeCatalogData(state, action) {
      state.recipeCatalogData = action.payload;
    },
  },
});

export const { setRecipeCatalogData } = recipeCatalogDataSlice.actions;
export default recipeCatalogDataSlice.reducer;
