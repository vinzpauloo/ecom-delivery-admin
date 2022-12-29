import { configureStore } from "@reduxjs/toolkit";
import modalSlice from "../features/modalSlice";
import orderHistoryWidthAdjust from "../features/orderHistoryWidthAdjust";

export const store = configureStore({
  reducer: {
    modal: modalSlice,
    orderHistoryWidth: orderHistoryWidthAdjust,
  },
});
