import { createSlice, createAsyncThunk, current } from "@reduxjs/toolkit";

export const getUsers = createAsyncThunk("users/getUsers", () => {
    return fetch('/users')
    .then((res) => res.json())
    .then((data) => data)
})

export const signup = createAsyncThunk("users/signup", (user) => {
    return fetch("/signup" , {
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
})

export const login = createAsyncThunk("users/login", (user) => {
    return fetch("/login", {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(user)
    })
    .then((res) => res.json())
    .then((data) => {
      return data;
    });
  });
  

  export const getCurrentUser = createAsyncThunk("users/getCurrentUser", (user) => {
    return fetch('/me')
    .then((res) => {
        if (!res.ok) {
            throw new Error("You aren't logged in")
        } 
        return res.json()
    })
    .then((data) => data)
})

export const logout = createAsyncThunk("users/logout", (user) => {
    return fetch("/logout", {
        method: "DELETE"
    })
})

const userSlice = createSlice({
    name: "users",
    initialState:{
        entities: [],
        status: 'idle',
        currentUser: null,
    } ,
    reducers: {

    },
    extraReducers: {
        [getUsers.fulfilled](state, action){
            state.entities = action.payload
            console.log(state.entities)
        },
        [signup.fulfilled](state, action){
            state.entities.push(action.payload)
            state.currentUser = action.payload
        },
        [login.fulfilled](state, action){
            state.currentUser = action.payload 
        }, 
        [getCurrentUser.fulfilled](state, action) {
            state.currentUser = action.payload
        },
        [logout.fulfilled](state, action) {
            state.currentUser = null
        }
    } 
})

export default userSlice.reducer