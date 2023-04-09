import { configureStore } from "@reduxjs/toolkit";
import paragraphSlice from "../features/paragraphSlice";

export const store = configureStore({
    reducer: {
            paragraph: paragraphSlice
    }
})