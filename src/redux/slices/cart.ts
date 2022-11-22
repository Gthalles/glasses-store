import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IRootState } from "..";

interface ICartState {
    isOpen: boolean;
}

const initialState: ICartState = {
    isOpen: false,
};

const reducers = {
    setOpen: (state: ICartState, action: PayloadAction<boolean>) => {
        state.isOpen = action.payload;
    },
};

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers,
});

export const cartState = (state: IRootState) => state.cart;
