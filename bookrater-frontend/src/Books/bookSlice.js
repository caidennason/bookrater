import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'

export const getReadBooks = createAsyncThunk("books/getBooks", (book) => {
    return fetch('/books')
    .then(res => res.json())
    .then((data) => data)
})

export const getWishlistBooks = createAsyncThunk("books/getWishlistBooks", (book) => {
    return fetch('/wishlistbooks')
    .then(res => res.json())
    .then((data) => data)
})

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
    console.log('console log from the deleteBook function')
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

export const rateBook = createAsyncThunk("books/update", (book) => {
    return fetch("/rate", {
        method: "PATCH", 
        headers: {
            "Accept": "application/json", 
        }, 
        body: JSON.stringify(book)
    })
    .then((res) => {
        if (!res.ok) {
            throw new Error("unable to rate")
        }
        res.json()
    })
    .then((data) => data)
})

const bookSlice = createSlice({
    name: "books",
    initialState: {
        entities: [],
        wishlistEntities: [],
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
            const deletedBook = action.meta.arg;
            if (deletedBook.wishlist) {
                const remainingWishlistBooks = state.wishlistEntities.filter((b) => b.id !== deletedBook.id);
                state.wishlistEntities = remainingWishlistBooks;
              } else {
                const remainingBooks = state.entities.filter((b) => b.id !== deletedBook.id);
                state.entities = remainingBooks;
              }
            state.status = 'deleted';
        }, 
        [getReadBooks.fulfilled](state, action){ 
            console.log(action.payload)
            state.entities = action.payload;
        },
        [getWishlistBooks.fulfilled](state, action){
            state.wishlistEntities = action.payload;
        },
        [rateBook.fulfilled](state, action){
            // state.entities = action.payload
            console.log(' rate is working from the slice ')
        }, 
        [rateBook.pending](state, action){
            console.log(' rate is pending from the slice ')
        }, 
        [rateBook.rejected](state, action){
            console.log(' rate is rejected from the slice ')
        }
    }
})

export default bookSlice.reducer