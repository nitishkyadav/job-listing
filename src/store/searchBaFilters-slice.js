import { createSlice } from "@reduxjs/toolkit";

const initialState = { keywords: [], isSearchEnabled: false };

const filterKeywords = createSlice({
  name: "filterKeyword",
  initialState,
  reducers: {
    addKeywords(state, action) {
      if (state.keywords.length === 0) {
        state.isSearchEnabled = true;
        state.keywords.push(action.payload.value);
      }
      if (
        state.keywords.length > 0 &&
        !state.keywords.includes(action.payload.value)
      ) {
        state.isSearchEnabled = true;
        state.keywords.push(action.payload.value);
      }
    },

    removeKeywords(state, action) {
      if (
        state.keywords.length > 0 &&
        state.keywords.includes(action.payload.value)
      ) {
        // const index = state.keywords.indexOf(action.payload);
        state.keywords = state.keywords.filter(
          (key) => key !== action.payload.value,
        );
      }

      if (state.keywords.length === 0) {
        state.isSearchEnabled = false;
      }
    },

    removeFilters(state) {
      state.keywords = [];
      state.isSearchEnabled = false;
    },
  },
});

export const filterKeywordsActions = filterKeywords.actions;

export default filterKeywords;
