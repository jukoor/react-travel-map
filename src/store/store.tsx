import { configureStore } from "@reduxjs/toolkit";
import countrySliceReducer from "./countrySlice";
import userSliceReducer from "./userSlice";
import appSliceReducer from "./appSlice.tsx";

export const store = configureStore({
  reducer: {
    App: appSliceReducer,
    Country: countrySliceReducer,
    User: userSliceReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
