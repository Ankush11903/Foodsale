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
            // console.log(item)
            const quantity =
              item && item.hasOwnProperty("quantity")
                ? state.items[action.payload.menuItem.id]?.quantity + action.payload.value
                : action.payload.value;
            state.items[action.payload.menuItem.id] = { ...action.payload.menuItem, quantity };
            state.totalItemsCount+=action.payload.value;
            
          },
          addItemByOne: (state, action) => {
            // console.log(action.payload)
              const item = state.items[action.payload.id];
              console.log(item)
              const quantity =
                item && item.hasOwnProperty("quantity")
                  ? state.items[action.payload.id]?.quantity + 1
                  : 1;
              state.items[action.payload.id] = { ...action.payload, quantity };
              state.totalItemsCount+=1;
              
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
          clearOneItem: (state, action) => {
            const item = state.items[action.payload.id];
            
              state.totalItemsCount-=item.quantity;
              delete state.items[action.payload.id];
            
          },
        clearAllItem:(state,action)=>{
            state.items=[];
            state.totalItemsCount=0;
        }
    }
});


export const{addItem,removeItem,clearAllItem,setItem,addItemByOne,clearOneItem} = cartSlice.actions;
export default cartSlice.reducer;