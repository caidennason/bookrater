import { createSlice, createAsyncThunk, current } from "@reduxjs/toolkit";

export const signup = createAsyncThunk("users/signup", (user) => {
    return fetch("http://localhost:3000/signup" , {
        method: "POST", 
        headers: {
            "Accept": "application/json", 
            "Content-Type": "application/json"
        }, 
        body: JSON.stringify(user)
    })
        .then((res) => res.json())
        .then((data) => console.log(data))
})

const userSlice = createSlice({
    name: "users",
    initialState:{
        enitities: []
    } ,
    reducers: {

    },
    extraReducers: {

    }
})

export default userSlice.reducer