import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice"

const appStore = configureStore({
    // App's Big Reducer
    // This contains small reducers in it
    reducer : {
        cart : cartReducer
    }
});


export default appStore;