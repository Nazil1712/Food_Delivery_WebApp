import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice"

const AppStore = configureStore({
    // App's Big Reducer
    // This contains small reducers in it
    reducer : {
        cart : cartReducer
    }
});


export default AppStore;