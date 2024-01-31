import { createSlice } from '@reduxjs/toolkit';
import { CatalogItemDataType } from '../../types/customType';

// первое состояние
const initialState: { dataItem: CatalogItemDataType } = {
  dataItem: {
    id: '',
    color: '#000000',
    date: '',
    title: '',
    recipe: '',
    cookingTime: '',
  },
};

export const modalFormSlice = createSlice({
  name: 'modalForm',
  initialState,
  reducers: {
    setId(state, action) {
      state.dataItem.id = action.payload;
    },
    setColor(state, action) {
      state.dataItem.color = action.payload;
    },
    setDate(state, action) {
      state.dataItem.date = action.payload;
    },
    setTitle(state, action) {
      state.dataItem.title = action.payload;
    },
    setRecipe(state, action) {
      state.dataItem.recipe = action.payload;
    },
    setCookingTime(state, action) {
      state.dataItem.cookingTime = action.payload;
    },
  },
});

export const { setId, setColor, setDate, setTitle, setRecipe, setCookingTime } =
  modalFormSlice.actions;
export default modalFormSlice.reducer;
