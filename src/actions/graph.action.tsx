import  { addEdge } from './functions/graph/add-edge'
import { removeEdge } from './functions/graph/remove-edge'
import { deleteNode } from './functions/graph/delete-node'

export const addGraphEdge = (edge: string) => {
    return {
        type: 'ADD_EDGE',
        addGraphEdge: addEdge.bind({ edge })
    }
}

export const removeGraphEdge = (edge: string) => {
    return {
        type: 'REMOVE_EDGE',
        removeGraphEdge: removeEdge.bind({ edge })
    }
}

export const deleteGraphNode = (node: string) => {
    return {
        type: 'DELETE_NODE',
        deleteGraphNode: deleteNode.bind({ node })
    }
}

export const setGraphData = (graphData: IGraphData) => {
return {
    type: 'SET_GRAPH_DATA',
    graphData: () => graphData
    }
}
