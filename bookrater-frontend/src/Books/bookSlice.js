import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'



const bookSlice = createSlice({
    name: "books",
    initialState: {
        entities: [],
        status: 'idle',
    } ,
    reducers: {

    }, 
    extraReducers: {

    }
})

export default bookSlice.reducer