import { configureStore } from "@reduxjs/toolkit";
import { codeReducer } from "../containers/Code/codeSlice.ts";

export const store = configureStore({
  reducer: {
    code: codeReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AddDispatch = typeof store.dispatch;
