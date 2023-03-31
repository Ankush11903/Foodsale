import { createSlice } from "@reduxjs/toolkit";

const cartSlice=createSlice({
    name:"cart",
    initialState:{
    items: {},
    totalItemsCount: 0,
    deliveryAddress: {},
    paymentMethod: {},
    },
    reducers:{
        addItem: (state, action) => {
            const item = state.items[action.payload.id];
            const quantity =
              item && item.hasOwnProperty("quantity")
                ? state.items[action.payload.id]?.quantity + 1
                : 1;
            state.items[action.payload.id] = { ...action.payload, quantity };
            state.totalItemsCount++;
          },
        removeItem: (state, action) => {
            const item = state.items[action.payload];
            // console.log(item);
            if (!item) return;
            if (item.quantity > 1) {
              item.quantity -= 1;
              state.totalItemsCount--;
            } else {
              state.totalItemsCount--;
              delete state.items[action.payload];
            }
          },
        clearAllItem:(state,action)=>{
            state.items=[];
        }
    }
});


export const{addItem,removeItem,clearAllItem,setItem} = cartSlice.actions;
export default cartSlice.reducer;