import { createSlice } from '@reduxjs/toolkit';

// первое состояние
const initialState = {
  modalActive: false,
};

export const modalCreateSlice = createSlice({
  name: 'modalCreate',
  initialState,
  reducers: {
    setModalActive(state, action) {
      state.modalActive = action.payload;
    },
  },
});

export const { setModalActive } = modalCreateSlice.actions;
export default modalCreateSlice.reducer;
