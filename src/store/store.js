import { configureStore } from "@reduxjs/toolkit";
import menuSlice from "../utils/menuSlice";

const store = configureStore({
    reducer: {
        menu: menuSlice
    },
});

export default store;