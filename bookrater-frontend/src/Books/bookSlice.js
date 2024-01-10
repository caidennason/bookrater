import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'

export const submitBook = createAsyncThunk("books/submit", (book) => {
    return fetch("/submit", {
        method: "POST",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        }, 
        body: JSON.stringify(book)
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

export const deleteBook = createAsyncThunk("books/delete", (book) => {
    console.log(book)
    return fetch(`/books/${book.id}`, {
        method: "DELETE"
    })
    .then((res) => {
        if (!res.ok) {
            throw new Error("unable to delete book")
        }
        return res.json()
    })
    .then((data) => data)
})


const bookSlice = createSlice({
    name: "books",
    initialState: {
        entities: [],
        status: 'idle',
    } ,
    reducers: {

    }, 
    extraReducers: {
        [submitBook.fulfilled](state, action){
            state.entities.push(action.payload)
            console.log('successfully sent a book to the backend', state)
        },
        [submitBook.rejected](state, action){
            console.log(action)
        }, 
        [deleteBook.fulfilled](state, action){
            console.log('hello from delete book in redux')
        }
    }
})

export default bookSlice.reducer