import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  width: "1570px",
  slidesPerView: 3,
};

export const orderHistoryWidthAdjust = createSlice({
  name: "orderHistoryWidth",
  initialState,
  reducers: {
    adjustWidth: (state, action) => {
      state.width = action.payload.width;
      state.slidesPerView = action.payload.slide;
    },
  },
});

export const { adjustWidth } = orderHistoryWidthAdjust.actions;

export default orderHistoryWidthAdjust.reducer;
