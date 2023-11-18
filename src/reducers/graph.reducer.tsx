import { createSlice } from '@reduxjs/toolkit';

export type GraphAction = {
    [props : string]: (graphFunction: IGraphData | void) => IGraphData
}

const initGraphData = {
    nodes: [{id: 'Graph initialized successfully'}], 
    links: []
}

const graphSlice = createSlice({
    name: 'graph',
    initialState: initGraphData as IGraphData,
    reducers: {
        setGraphData: (state, action) => {
            // possible because of immer
            state = action.payload

            // adding graphData to localStorage on change
            localStorage.setItem(
                'react-graph-app-data', 
              JSON.stringify(action.payload)
              )

            return state
          }
    }
})

export const { setGraphData } = graphSlice.actions

export default graphSlice.reducer