import { createSlice, current } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:'cart',
    initialState: {
        items: []
    },
    reducers:{
        addItem: (state,action)=>{

            // Older way of changing state 
            // Vanilla Redux says ==> NEVER MUTATE STATE, create Copy
            // const newState = [...state];
            // newState.items.push(action.payload)
            // return newState; // returning was mandatory


            // New Redux Says ==> YOU HAVE TO MUTATE STATE
            // We are mutating state over here => means directly changing state
            state.items.push(action.payload)
        },
        removeItem: (state,action)=>{
            state.items.pop()
        },
        // OriginalState = {items : [Some items]}
        clearCart: (state)=>{

            // console.log(current(state))

            // This will clears the array
            // state.items.length = 0

            // RTK says ==> either mutate the existing state OR return a new state
            return {items : []};
        }
    }
})

export const {addItem,removeItem,clearCart} = cartSlice.actions;
export default cartSlice.reducer;