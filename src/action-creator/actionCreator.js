import axios from "axios";
import {createAsyncThunk} from "@reduxjs/toolkit";

export const fetchData = createAsyncThunk(
    'users/fetch',
    async(_,  thunkApi) => {
        try{
            const response = await axios.get('http://localhost:3001/data')
            return response.data
        }catch (e) {
            return thunkApi.rejectWithValue(e.message)
        }
    }
)