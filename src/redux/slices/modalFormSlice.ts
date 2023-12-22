import { createSlice } from '@reduxjs/toolkit';

// первое состояние
const initialState = {
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
