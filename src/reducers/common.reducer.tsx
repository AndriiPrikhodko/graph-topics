import { createSlice } from '@reduxjs/toolkit';

const selectSlice = createSlice({
  name: 'select',
  initialState: { 
    type: 'from',
    graphFunction: null
    },
  reducers: {
    setLinkType: (state, action) => {
      state.type = action.payload;
    },
    setGraphFunction: (state, action) => {
        state.graphFunction = action.payload;
      },
  },
});

export const { setLinkType, setGraphFunction } = selectSlice.actions;

export default selectSlice.reducer;