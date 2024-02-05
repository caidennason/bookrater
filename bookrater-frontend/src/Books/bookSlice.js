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

export const rateBook = createAsyncThunk("books/rate", (book) => {
    return fetch(`/books/${book.id}`, {
        method: "PATCH", 
        headers: {
            "Accept": "application/json", 
            "Content-Type": "application/json"
        }, 
        body: JSON.stringify(book)
    })
    .then((res) => {
        if (!res.ok) {
            throw new Error("unable to rate")
        }
        return res.json()
    })
    .then((data) => {
        return data
    })
})

export const readBookChange = createAsyncThunk("books/changeWishlist", (book) => {
    console.log(book)
    return fetch(`/books/${book.id}`, {
        method: "PATCH", 
        headers: {
            "Accept": "application/json", 
            "Content-Type": "application/json"
        },
        body: JSON.stringify(book)
    })
    .then((res) => {
        if (!res.ok) {
            throw new Error("unable to change wishlist")
        }
        return res.json()
    })
    .then((data) => {
        console.log(data)
        return data
    })
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
            state.entities = action.payload;
        },
        [getWishlistBooks.fulfilled](state, action){
            state.wishlistEntities = action.payload;
        },
        [rateBook.fulfilled](state, action){
            const booksWithReviews = state.entities.map((b) => {
                if (b.id === action.payload.id){
                    return action.payload
                } else {
                    return b
                }
            })
            state.entities = booksWithReviews
        }, 
        [readBookChange.fulfilled](state, action){
            console.log(action.payload, 'read change is working')
            const readBook = state.wishlistEntities.map((b) => {
                if (b.id === action.payload.id){
                    return action.payload
                } else {
                    return b
                }
            })
            const remainingWishListBooks = state.wishlistEntities.filter((b) => b.id !== action.payload.id)
            state.wishlistEntities = remainingWishListBooks
            state.entities.push(action.payload)
        }, 
        [readBookChange.pending](state, action){
            console.log(' readBookChange is pending')
        }, 
        [readBookChange.rejected](state, action){
            console.log( ' readBookChange is rejected')
        }
    }
})

export default bookSlice.reducer