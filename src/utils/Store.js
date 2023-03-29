import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./CartSlice";

const store=configureStore({
    reducer:{
        cart:cartSlice
    }
});

export default store;