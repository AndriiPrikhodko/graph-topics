import { createSlice } from '@reduxjs/toolkit';

export type GraphAction = {
    [props : string]: (graphFunction: IGraphData | void) => IGraphData
}

const initGraphData = {
    nodes: [{id: '1'}, {id: '2'}, {id: '3'}], 
    links: [{source: '1', target: '2'}, {source: '1', target: '3'}]
}

const graphSlice = createSlice({
    name: 'graph',
    initialState: initGraphData as IGraphData,
    reducers: {
        setGraphData: (state, action) => {
            return action.payload;
          }
    }
})

export const { setGraphData } = graphSlice.actions

export default graphSlice.reducer