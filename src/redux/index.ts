import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { cartSlice } from "./slices/cart";

export const reduxStore = configureStore({
    reducer: {
        cart: cartSlice.reducer,
    },
});

export type ReduxDispatch = typeof reduxStore.dispatch;
export type IRootState = ReturnType<typeof reduxStore.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    IRootState,
    unknown,
    Action<string>
>;
