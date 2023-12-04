import { addEdge } from './functions/graph/add-edge'
import { deleteNode } from './functions/graph/delete-node'
import { removeEdge } from './functions/graph/remove-edge'

const graphFunctions = {
    addGraphEdge: addEdge,
    deleteGraphNode: deleteNode,
    removeGraphEdge: removeEdge
}

export default graphFunctions