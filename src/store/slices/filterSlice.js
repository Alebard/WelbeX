import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    columnName: '',
    condition: '',
    meaning: '',
}


export const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers:{
        changeColumnName(state, action){
            state.columnName = action.payload
        },
        changeCondition(state, action){
            state.condition = action.payload
        },
        changeMeaning(state, action){
            state.meaning = action.payload
        },
    },
})

export const { changeColumnName, changeCondition, changeMeaning } = filterSlice.actions
