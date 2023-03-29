import { createSlice } from "@reduxjs/toolkit";

const cartSlice=createSlice({
    name:"cart",
    initialState:{items:[]},
    reducers:{
        addItem:(state,action)=>{
            state.items.push(action.payload);
        }
    }
});


export const{addItem} = cartSlice.actions;
export default cartSlice.reducer;