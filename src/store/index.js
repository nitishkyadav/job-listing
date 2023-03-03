import { configureStore } from "@reduxjs/toolkit";
import filterKeywords from "./searchBaFilters-slice";

const store = configureStore({
  reducer: {
    filterKeywords: filterKeywords.reducer,
  },
});

export default store;
