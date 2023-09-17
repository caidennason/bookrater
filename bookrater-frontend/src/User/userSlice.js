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
        .then((res) => {
            if (!res.ok) {
                return res.json()
                .then((errorData) => {
                    throw new Error(errorData.error)
                })
            }
            return res.json()
        })
        .then((data) => data)
        // .then((res) => res.json())
        // .then((data) => data)
})

export const login = createAsyncThunk("users/login", (user) => {
    return fetch("http://localhost:3000/login", {
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
        status: '',
        currentUser: null
    } ,
    reducers: {

    },
    extraReducers: {
        [signup.fulfilled](state, action){
            console.log(action.payload)
            state.entities.push(action.payload)
            state.currentUser = action.payload
        },
        [signup.rejected](state, action){
            state.status = "Make sure to fill out all fields."
        },
        [login.fulfilled](state, action){
            console.log(action.payload)
        }
    }
})

export default userSlice.reducer