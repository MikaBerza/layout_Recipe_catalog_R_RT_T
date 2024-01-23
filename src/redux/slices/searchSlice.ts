import { createSlice } from '@reduxjs/toolkit';
import { SearchType } from '../../types/customType';

// первое состояние
const initialState: SearchType = {
  searchValue: '',
  searchFlag: false,
  searchFieldActive: false,
  searchData: [],
};

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearch(state, action) {
      state.searchValue = action.payload;
      state.searchFlag = action.payload.trim().length > 0;

      if (!state.searchFlag) state.searchFieldActive = false;
    },
    setSearchFieldActive(state, action) {
      state.searchFieldActive = action.payload;
    },
    setSearchData(state, action) {
      state.searchData = action.payload;
    },
  },
});

export const { setSearch, setSearchFieldActive, setSearchData } =
  searchSlice.actions;
export default searchSlice.reducer;
