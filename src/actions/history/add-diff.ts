import { clone } from 'ramda'
import { filterUniqueNodes, filterUniqueLinks } from '../../helpers/data-adapter/filter'
import { nodeIndex } from '../../helpers/data-adapter/indexer'

export const addDiff =
    (graphData: GraphData, diffGraphData: GraphData) => {
        let mutableData = clone(graphData)
        let mutableDiff = clone(diffGraphData)
        let totalNodes = [
            ...mutableData.nodes,
            ...mutableDiff.nodes
        ]

        const uniqueNodes = filterUniqueNodes(totalNodes)
        const indexedUniqueNodes = nodeIndex(0, uniqueNodes)

        mutableData = {
            nodes: indexedUniqueNodes,
            links: [
                ...mutableData.links,
                ...mutableDiff.links
            ]
        }
        return mutableData
    }