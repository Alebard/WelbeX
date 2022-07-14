import { configureStore } from '@reduxjs/toolkit';
import {filterSlice} from "./slices/filterSlice";
import {dataSlice} from "./slices/dataSlice";

export const store = configureStore({
  reducer: {
    filters: filterSlice.reducer,
    data: dataSlice.reducer
  },
});
