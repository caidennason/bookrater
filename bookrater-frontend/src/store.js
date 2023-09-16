import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./User/userSlice";


const store = configureStore({
    reducer: {
        users: userReducer
    }
})

export default store;