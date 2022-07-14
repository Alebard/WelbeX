import {createSlice} from "@reduxjs/toolkit";
import {fetchData} from "../../action-creator/actionCreator";

const initialState = {
    value: null,
    isLoading: false,
    error: '',
    data: null,
}
export const dataSlice = createSlice({
    name: 'data',
    initialState,
    extraReducers: {
        [fetchData.fulfilled.type]: (state, action) => {
            state.isLoading = false;
            state.error = '';
            state.data = action.payload;
        },
        [fetchData.rejected.type]: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        },
        [fetchData.pending.type]: (state) => {
            state.isLoading = true;
        }
    }
})