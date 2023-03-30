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
            state.totalItemsCount = state.totalItemsCount + 1;
          },
        removeItem: (state, action) => {
            const item = state.items[action.payload];
            console.log(item);
            if (!item) return;
            if (item.quantity > 1) {
              item.quantity -= 1;
              state.totalItemsCount--;
            } else {
              state.totalItemsCount--;
              delete state.items[action.payload];
            }
          },
        // removeItem:(state,action)=>{
            // const itemRemoved=state?.items[action.payload];
        //    console.log(itemRemoved);
        //     state?.items?.filter(element => {
        //         if(element !== itemRemoved){
        //             element;
        //         }

        //     }
        //     );
        // console.log(state?.items);
        // console.log(action?.payload);
        // },
        clearAllItem:(state,action)=>{
            state.items=[];
        }
    }
});


export const{addItem,removeItem,clearAllItem} = cartSlice.actions;
export default cartSlice.reducer;