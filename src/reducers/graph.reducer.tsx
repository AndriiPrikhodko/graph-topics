import { createSlice } from '@reduxjs/toolkit';

import  { addEdge } from '../actions/functions/graph/add-edge'
import { removeEdge } from '../actions/functions/graph/remove-edge'
import { deleteNode } from '../actions/functions/graph/delete-node'

export type GraphAction = {
    [props : string]: (graphFunction: IGraphData | void) => IGraphData
}
// test init graphData
// const initGraphData = {
//     nodes: [{id: '1'}, {id: '2'}, {id: '3'}], 
//     links: [{source: '1', target: '2'}, {source: '1', target: '3'}]
// }

// const graphReducer = (graphData: IGraphData  = initGraphData, action: GraphAction & { type: string })
//     : IGraphData => {
//     switch(action.type) {
//         case 'ADD_EDGE': 
//             return action.addGraphEdge(graphData)
//         case 'REMOVE_EDGE':
//             return action.removeGraphEdge(graphData)
//         case 'DELETE_NODE':
//             return action.deleteGraphNode(graphData)
//         case 'SET_GRAPH_DATA':
//             return action.graphData()
//         default:
//             return graphData
//     }
// }

// export default graphReducer



const initGraphData = {
    nodes: [{id: '1'}, {id: '2'}, {id: '3'}], 
    links: [{source: '1', target: '2'}, {source: '1', target: '3'}]
}

const graphSlice = createSlice({
    name: 'graph',
    initialState: initGraphData as IGraphData,
    reducers: {
        addGraphEdge: (state, action) => {
            return state
        },
        removeGraphEdge: (state, action) => {
            return state
        },
        deleteGraphNode: (state, action) => {
            return state
        },
        setGraphData: (state, action) => {
            return action.payload;
          }
    }
})

export const {addGraphEdge, removeGraphEdge, deleteGraphNode, setGraphData } = graphSlice.actions
export const actions = graphSlice.actions
export default graphSlice.reducer