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
          console.log(action.payload)
            const item = state.items[action.payload.menuItem.id];
            const quantity =
              item && item.hasOwnProperty("quantity")
                ? state.items[action.payload.menuItem.id]?.quantity + action.payload.value
                : action.payload.value;
            state.items[action.payload.menuItem.id] = { ...action.payload.menuItem, quantity };
            state.totalItemsCount+=action.payload.value;
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