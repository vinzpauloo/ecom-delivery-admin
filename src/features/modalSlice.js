import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  hold: false,
  decline: false,
  approve: false,
  modalStatus: "",
};

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    handleHold: (state, action) => {
      state.hold = action.payload;
    },
    handleDecline: (state, action) => {
      state.decline = action.payload;
    },
    handleApprove: (state, action) => {
      state.approve = action.payload;
    },
    handleModalStatus: (state, action) => {
      state.modalStatus = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { handleHold, handleDecline, handleApprove, handleModalStatus } =
  modalSlice.actions;

export default modalSlice.reducer;
