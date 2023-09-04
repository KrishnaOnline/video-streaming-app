import { createSlice } from "@reduxjs/toolkit";
import { LIVE_CHAT_COUNT } from "./constants";

const chatSlice = createSlice({
    name: "chat",
    initialState: {
        messages: [],
    },
    reducers: {
        addMessage: (state, action) => {
            // console.log(state.messages.length);
            // if(state.messages.length < LIVE_CHAT_COUNT){
                state.messages.splice(LIVE_CHAT_COUNT, 1);
                state.messages.push(action.payload);
            // }
            // else {
                // state.messages.splice(LIVE_CHAT_COUNT, 1);
                // state.messages.unshift(action.payload);
            // }

            // state.messages.unshift(action.payload);
            // state.messages.splice(LIVE_CHAT_COUNT, 1);
        }
    }
});

export const {addMessage} = chatSlice.actions;

export default chatSlice.reducer;