import { createSlice } from "@reduxjs/toolkit";

const menuSlice = createSlice({
    name: 'menu',
    initialState: {
        isOpen: false,
    },
    reducers: {
        toggleMenu: (state) => {
            state.isOpen = !state.isOpen;
        }
    }
});

export const {toggleMenu} = menuSlice.actions;

export default menuSlice.reducer;