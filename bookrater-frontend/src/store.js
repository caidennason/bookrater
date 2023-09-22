import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./User/userSlice";
import bookReducer from "./Books/bookSlice";



const store = configureStore({
    reducer: {
        users: userReducer,
        books: bookReducer
    }
})

export default store;