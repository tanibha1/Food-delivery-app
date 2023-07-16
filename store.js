import { configureStore } from "@reduxjs/toolkit";
import CartReducer from "./src/redux/CartReducer";


export default configureStore({
    reducer:{
        cart:CartReducer
    }
})