import { createSlice } from '@reduxjs/toolkit';

export type GraphAction = {
    [props : string]: (graphFunction: IGraphData | void) => IGraphData
}

const initGraphData = {
    nodes: [{id: 'Graph initialized successfully'}], 
    links: []
}

const emptyGraphData = {
    nodes: [], 
    links: []
}

const graphSlice = createSlice({
    name: 'graph',
    initialState: initGraphData as IGraphData,
    reducers: {
        setGraphData: (state, action) => {
            // possible because of immer
            state = action.payload

            return state
          },
          cleanGraphData: (state, action: {payload: void}) => {
            // possible because of immer
            state = emptyGraphData

            return state
          }
    }
})

export const { setGraphData, cleanGraphData } = graphSlice.actions

export default graphSlice.reducer