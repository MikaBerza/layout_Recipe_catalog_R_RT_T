import { createSlice } from '@reduxjs/toolkit';
import { SearchType } from '../../types/customType';

// первое состояние
const initialState: SearchType = {
  searchValue: '',
  searchFlag: false,
};

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearch(state, action) {
      state.searchValue = action.payload;
      state.searchFlag = action.payload.trim().length > 0;
    },
  },
});

export const { setSearch } = searchSlice.actions;
export default searchSlice.reducer;
