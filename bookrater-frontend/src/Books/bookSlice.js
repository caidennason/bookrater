import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'

// export const findBook = createAsyncThunk("books/findBook", (book) => {
//     return fetch("/search" , {
//         method: "POST",
//         headers: {
//             "Accept": "application/json",
//             "Content-Type": "application/json"
//         },
//         body: JSON.stringify(book)
//     })
//     .then((res) => {
//         if (!res.ok) {
//             return res.json()
//             .then((errorData) => {
//                 throw new Error(errorData.error)
//             })
//         }
//         return res.json()
//     })
//     .then((data) => data)
// })

const bookSlice = createSlice({
    name: "books",
    initialState: {
        entities: [],
        status: 'idle',
    } ,
    reducers: {

    }, 
    extraReducers: {
        [findBook.fulfilled](state, action){
            state.entities.push(action.payload)
        }
    }
})

export default bookSlice.reducer