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
        .then((data) => data)
})

const userSlice = createSlice({
    name: "users",
    initialState:{
        entities: [],
        status: ''
    } ,
    reducers: {

    },
    extraReducers: {
        [signup.fulfilled](state, action){
            // state.entities.push(action.payload)
            // state.status = 'Successfully Signed Up'
            // console.log(state.status)
            // console.log(state.entities)
            console.log(action.payload)
            state.entities.push(action.payload)
        }
    }
})

export default userSlice.reducer