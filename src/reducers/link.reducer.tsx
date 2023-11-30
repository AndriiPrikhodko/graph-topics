import { createSlice } from '@reduxjs/toolkit';

const selectSlice = createSlice({
  name: 'select',
  initialState: { type: 'from' },
  reducers: {
    setLinkType: (state, action) => {
      state.type = action.payload;
    },
  },
});

export const { setLinkType } = selectSlice.actions;

export default selectSlice.reducer;