import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CodeState {
  input: string;
  status: string;
  color: string;
}

const initialState: CodeState = {
  input: "",
  status: "",
  color: "white",
};

export const codeSlice = createSlice({
  name: "code",
  initialState,
  reducers: {
    addNumber: (state, action: PayloadAction<string>) => {
      if (state.input.length < 4) {
        state.input += action.payload;
      }
    },
    removeNumber: (state) => {
      state.input = state.input.slice(0, -1);
    },
    codeCheck: (state) => {
      const correctCode = "4578";
      if (state.input === correctCode) {
        state.status = "Access Granted";
        state.color = "green";
      } else {
        state.status = "Access Denied";
        state.color = "red";
      }
    },
    resetCode: (state) => {
      state.input = "";
      state.status = "";
      state.color = "white";
    },
  },
});

export const codeReducer = codeSlice.reducer;
export const { addNumber, removeNumber, codeCheck, resetCode } =
  codeSlice.actions;
