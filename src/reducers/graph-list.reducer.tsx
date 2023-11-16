import { loadGraphList as APIloadGraphList }
 from '../actions/graph-api.action'
import { createSlice } from '@reduxjs/toolkit';

const graphListSlice = createSlice({
    name: 'graphList',
    initialState: {
        data: [],
        status: 'idle',
        error: null,
      } as IGraphListState,
    reducers: {},
    extraReducers: (builder) => {
    builder
        .addCase(APIloadGraphList.pending, (state) => {
        state.status = 'loading';
        })
        .addCase(APIloadGraphList.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload !== undefined ? action.payload as string[] : [];
        })
        .addCase(APIloadGraphList.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error?.message;
        })

    },
});

export default graphListSlice.reducer