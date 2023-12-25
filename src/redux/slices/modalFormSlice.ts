import { createSlice } from '@reduxjs/toolkit';
import { ModalActiveInitialStateType } from '../../types/customType';

// первое состояние
const initialState: ModalActiveInitialStateType = {
  modalActive: false,
};

export const modalFormSlice = createSlice({
  name: 'modalForm',
  initialState,
  reducers: {
    setModalActive(state, action) {
      state.modalActive = action.payload;
    },
  },
});

export const { setModalActive } = modalFormSlice.actions;
export default modalFormSlice.reducer;
