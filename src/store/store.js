import { configureStore } from "@reduxjs/toolkit";
import menuSlice from "../utils/menuSlice";
import chatSlice from "../utils/chatSlice";

const store = configureStore({
    reducer: {
        menu: menuSlice,
        chat: chatSlice,
    },
});

export default store;