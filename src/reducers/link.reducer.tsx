import { createSlice } from '@reduxjs/toolkit';

const selectSlice = createSlice({
  name: 'select',
  initialState: { type: 'star' },
  reducers: {
    setLinkType: (state, action) => {
      state.type = action.payload;
    },
  },
});

export const { setLinkType } = selectSlice.actions;

export default selectSlice.reducer;