// interface IAction {
//     type: string,
//     payload: string[]
// }

// const graphListReducer = (store: string[] = [], action: IAction) => {
//     switch(action.type) {
//         case 'LOAD_GRAPH_LIST':
//             return action.payload
//         default:
//             return store
//     }
// }

// export default graphListReducer
import { loadGraphList as APIloadGraphList }
 from '../actions/graph-api.action'
import { createSlice } from '@reduxjs/toolkit';

interface IGraphListState {
    data: string [],
    status: 'idle' | 'succeeded' | 'failed' | 'loading',
    error: string | null | undefined,
}

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
        });
    },
});

export default graphListSlice.reducer