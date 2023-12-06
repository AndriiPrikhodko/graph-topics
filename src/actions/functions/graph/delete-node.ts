import { nodeIndex } from '../../../helpers/data-adapter/indexer'

/**
 *
 * @param this
 * @param graphData
 * @returns updatedGraphData with nodes from the input list
 *  and all their links are removed
 */
export const deleteNode = function (this: string, graphData :GraphData):
{
    historyItem?: HistoryItem
    graphData: GraphData
} {
    const nodeArr = this.split(',')
    if (nodeArr.length >= 1) {
        let isLinked: boolean = true
        const { nodes, links } = graphData
        const nodeArrTrimmedLC = nodeArr.map(nodeName => nodeName.trim().toLowerCase())
        let historyDiff: GraphData = {
            nodes: [],
            links: []
        }
        const filteredLinks = links.filter(link => {
            isLinked = !(
                (
                    typeof link.source == 'string' ?
                        nodeArrTrimmedLC.includes(link.source.toLowerCase()) :
                        nodeArrTrimmedLC.includes(link.source.id.toLowerCase())
                ) || (
                    typeof link.target == 'string' ?
                        nodeArrTrimmedLC.includes(link.target.toLowerCase()) :
                        nodeArrTrimmedLC.includes(link.target.id.toLowerCase())
                )
            )
            if(!isLinked) historyDiff.links.push(link)
            return isLinked
        })

        const filteredNodes = nodes
            .filter(node => {
                let saveNodes = true
                saveNodes = !nodeArrTrimmedLC.includes(node.id.toLowerCase())
                if(!saveNodes) historyDiff.nodes.push(node)
                return saveNodes
            })

        const indexFilteredNodes = nodeIndex(0, filteredNodes)

        const updatedGraphData = {
            nodes: indexFilteredNodes,
            links: filteredLinks
        }

        const historyItem: HistoryItem = {
            type: 'delete',
            data: historyDiff
        }

        return {
            historyItem,
            graphData: updatedGraphData
        }
    }
    else {
        console.log(`incorrect input: ${this}`)
        return { graphData }
    }
}