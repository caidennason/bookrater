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

// export const deleteWishlistBook = createAsyncThunk("books/deleteWishlistBook", (book) => {
//     console.log('console log from the deleteWishlistBook function')
//     return fetch(`/books/${book.id}`, {
//         method: "DELETE"
//     })
//     .then((res) => {
//         if (!res.ok) {
//             throw new Error("unable to delete book")
//         }
//         return res.json()
//     })
//     .then((data) => data)
// })


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
            // console.log('hello from delete book in redux')
            const deletedBook = action.meta.arg;
            // const remainingBooks = state.entities.filter((b) => b.id !== deletedBook.id)
            // state.entities = remainingBooks;
            if (deletedBook.wishlist) {
                // If the deleted book is from the wishlist, update wishlistEntities
                const remainingWishlistBooks = state.wishlistEntities.filter((b) => b.id !== deletedBook.id);
                state.wishlistEntities = remainingWishlistBooks;
              } else {
                // If the deleted book is not from the wishlist, update entities
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
        // [deleteWishlistBook.fulfilled](state, action){
        //     console.log('deleting the wishlist book')
        //     const deletedWishlistBook = action.meta.arg;
        //     const remainingWishlistBooks = state.wishlistEntities.filter((b) => b.id !== deletedWishlistBook.id)
        //     state.wishlistEntities = remainingWishlistBooks;
        // }
    }
})

export default bookSlice.reducer