import { createSlice } from '@reduxjs/toolkit';
import { ModalActiveInitialStateType } from '../../types/customType';

// первое состояние
const initialState: ModalActiveInitialStateType = {
  modalActive: false,
  modalEditingActive: false,
  elementId: '',
  formDataColor: '#000000',
  formDataNameDish: '',
  formDataRecipe: '',
  formDataCookingTime: '',
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
    setElementId(state, action) {
      state.elementId = action.payload;
    },
    setFormDataColor(state, action) {
      state.formDataColor = action.payload;
    },
    setFormDataNameDish(state, action) {
      state.formDataNameDish = action.payload;
    },
    setFormDataRecipe(state, action) {
      state.formDataRecipe = action.payload;
    },
    setFormDataCookingTime(state, action) {
      state.formDataCookingTime = action.payload;
    },
  },
});

export const {
  setModalActive,
  setModalEditingActive,
  setElementId,
  setFormDataColor,
  setFormDataNameDish,
  setFormDataRecipe,
  setFormDataCookingTime,
} = modalFormSlice.actions;
export default modalFormSlice.reducer;
