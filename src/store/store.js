import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "../sclices/searchSlice";

const Store = configureStore({
  reducer: {
    
    search: searchReducer,
  },
});

export default Store;
