import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {
  CatalogDataInitialStateType,
  CatalogItemDataType,
} from '../../types/customType';

// первое состояние
const initialState: CatalogDataInitialStateType = {
  recipeCatalogData: [],
  isLoading: false,
  isErrors: false,
  //
  searchValue: '',
  searchFlag: false,
  searchData: [],
};

// получение данных с сервера
export const fetchRecipeCatalogData = createAsyncThunk(
  'recipeCatalogData/fetchRecipeCatalogData',
  async () => {
    // искусственная задержка перед получением данных
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const response = await fetch('http://localhost:4000/catalogData');
    const data = await response.json();
    return data;
  }
);

// добавление записи на сервер
export const fetchAddEntries = createAsyncThunk(
  'recipeCatalogData/fetchAddEntries',
  async (newDataItem: CatalogItemDataType) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    // после задержки, выполняем отправку данных на сервер
    const response = await fetch('http://localhost:4000/catalogData', {
      method: 'POST',
      // сообщаем серверу, что данные, которые мы отправляем, являются JSON-данными, и их кодировка UTF-8
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newDataItem),
    });
    const data = await response.json();
    return data;
  }
);

// редактирование записи на сервере
export const fetchEditingEntries = createAsyncThunk(
  'recipeCatalogData/fetchEditingEntries',
  async ({
    newDataItem,
    id,
  }: {
    newDataItem: CatalogItemDataType;
    id: string;
  }) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const response = await fetch(`http://localhost:4000/catalogData/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newDataItem),
    });
    const data = await response.json();
    return data;
  }
);

// удаление записи на сервере
export const fetchRemoveEntries = createAsyncThunk(
  'recipeCatalogData/fetchRemoveEntries',
  async (id: string) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const response = await fetch(`http://localhost:4000/catalogData/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await response.json();
    return data;
  }
);

// поиск записи на сервера
export const fetchSearchEntries = createAsyncThunk(
  'recipeCatalogData/fetchSearchEntries',
  async (valueSearch: string) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const response = await fetch(
      `http://localhost:4000/catalogData?title=${valueSearch}`
    );
    const data = await response.json();
    return data;
  }
);

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
    //
    setSearchData(state, action) {
      state.searchData = action.payload;
    },
    setSearchValue(state, action) {
      state.searchValue = action.payload;
      if (!state.searchValue.trim()) state.searchFlag = false;
    },
    setSearchFlag(state, action) {
      state.searchFlag = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder
      //___управление получением данных с сервера
      .addCase(fetchRecipeCatalogData.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchRecipeCatalogData.fulfilled, (state, action) => {
        state.isErrors = false;
        state.isLoading = false;
        state.recipeCatalogData = action.payload;
      })
      .addCase(fetchRecipeCatalogData.rejected, (state) => {
        state.isLoading = false;
        state.isErrors = true;
      })

      //___управление добавлением данных на сервера
      .addCase(fetchAddEntries.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchAddEntries.fulfilled, (state, action) => {
        state.isErrors = false;
        state.isLoading = false;
        // @ts-ignore
        state.recipeCatalogData.push(action.payload);
      })
      .addCase(fetchAddEntries.rejected, (state) => {
        state.isLoading = false;
        state.isErrors = true;
      })

      //___управление редактированием данных на сервера
      .addCase(fetchEditingEntries.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchEditingEntries.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isErrors = false;
        // Обновление данных в state на основе полученного ответа с сервера
        state.recipeCatalogData = state.recipeCatalogData.map((item) => {
          if (item.id === action.payload.id) {
            // Проверка на соответствие id
            return action.payload;
          } else {
            return item;
          }
        });
      })
      .addCase(fetchEditingEntries.rejected, (state) => {
        state.isLoading = false;
        state.isErrors = true;
      })

      // управление удалением записи на сервере
      .addCase(fetchRemoveEntries.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchRemoveEntries.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isErrors = false;
        state.recipeCatalogData = state.recipeCatalogData.filter(
          (item) => item.id !== action.payload.id
        );
      })
      .addCase(fetchRemoveEntries.rejected, (state) => {
        state.isLoading = false;
        state.isErrors = true;
      })

      // управление поиском записи на сервере
      .addCase(fetchSearchEntries.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchSearchEntries.fulfilled, (state, action) => {
        state.isErrors = false;
        state.isLoading = false;
        state.searchData = action.payload;
      })
      .addCase(fetchSearchEntries.rejected, (state) => {
        state.isLoading = false;
        state.isErrors = true;
      });
  },
});

export const {
  setRecipeCatalogData,
  setIsLoading,
  setIsErrors,
  setSearchData,
  setSearchValue,
  setSearchFlag,
} = recipeCatalogDataSlice.actions;
export default recipeCatalogDataSlice.reducer;
