import { createSlice } from '@reduxjs/toolkit';
import { ModalActiveInitialStateType } from '../../types/customType';

// первое состояние
const initialState: ModalActiveInitialStateType = {
  modalActive: false,
  modalEditingActive: false,
  modalDataActive: false,
  //
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
    setModalActive(state, action) {
      state.modalActive = action.payload;
    },
    setModalEditingActive(state, action) {
      state.modalEditingActive = action.payload;
    },
    setModalDataActive(state, action) {
      state.modalDataActive = action.payload;
    },
    //
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

export const {
  setModalActive,
  setModalEditingActive,
  setModalDataActive,
  //
  setId,
  setColor,
  setDate,
  setTitle,
  setRecipe,
  setCookingTime,
} = modalFormSlice.actions;
export default modalFormSlice.reducer;
