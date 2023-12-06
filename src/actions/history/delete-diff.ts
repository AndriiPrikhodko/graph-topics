import { deleteNode } from '../functions/graph/delete-node'
import { historyRemoveEdges } from './remove-edges'

export const removeDiff =
(graphData: GraphData, diffGraphData: GraphData) => {
    const {nodes, links} = diffGraphData
    const nodeNames = nodes.map(node => node.id).join(',')
    let {nodes: updatedNodes, } = deleteNode.call(nodeNames, graphData)
    let {nodes: _, links: updatedLinks} = historyRemoveEdges(graphData, links)

    return {updatedNodes, updatedLinks}
}