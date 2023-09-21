export type GraphAction = {
    [props : string]: (graphFunction: IGraphData | void) => IGraphData
}

// test init graphData
const initGraphData = {
    nodes: [{id: '1'}, {id: '2'}, {id: '3'}], 
    links: [{source: '1', target: '2'}, {source: '1', target: '3'}]
}

const graphReducer = (graphData: IGraphData  = initGraphData, action: GraphAction & { type: string })
    : IGraphData => {
    switch(action.type) {
        case 'ADD_EDGE': 
            return action.addGraphEdge(graphData)
        case 'REMOVE_EDGE':
            return action.removeGraphEdge(graphData)
        case 'DELETE_NODE':
            return action.deleteGraphNode(graphData)
        case 'SET_GRAPH_DATA':
            return action.graphData()
        default:
            return graphData
    }
}

export default graphReducer