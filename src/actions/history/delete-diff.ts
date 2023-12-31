import { filterUniqueLinksDiff } from '../../helpers/data-adapter/filter'
import { deleteNode } from '../functions/graph/delete-node'
import { clone } from 'ramda'

/**
 *
 * @param graphData
 * @param diffGraphData
 * @returns graphData without diff
 */
export const removeDiff =
(graphData: GraphData, diffGraphData: GraphData): GraphData => {
    let mutableData = clone(graphData)
    let mutableDiff = clone(diffGraphData)
    const {nodes, links} = mutableDiff
    const nodeNames = nodes.map(node => node.id).join(',')
    const {graphData: {nodes: updatedNodes}, } = deleteNode.call(nodeNames, mutableData)
    const updatedLinks = filterUniqueLinksDiff(mutableDiff.links ,mutableData.links)
    return {
        nodes: updatedNodes,
        links: updatedLinks
    }
}