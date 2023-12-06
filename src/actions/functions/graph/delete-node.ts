import { filterUnique } from '../../../helpers/data-adapter/filter'
import { nodeIndex } from '../../../helpers/data-adapter/indexer'

const getNodesDiff = (links: LinkObject[]) => {
    let nodes: NodeObject [] = []
    links.reduce((nodes, link) => {
        typeof link.source == 'string' ?
            nodes.push({id: link.source}):
            nodes.push({id: link.source.id})
        typeof link.target == 'string' ?
            nodes.push({id: link.target}):
            nodes.push({id: link.target.id})
        return nodes
    }, nodes)
    filterUnique(nodes)
    return nodes
}
/**
 *
 * @param this
 * @param graphData
 * @returns updatedGraphData with nodes from the input list
 *  and all their links are removed
 */
export const deleteNode = function (this: string, graphData :GraphData): GraphData {
    const nodeArr = this.split(',')
    if (nodeArr.length >= 1) {
        let historyDelete = {
            type: 'delete',
            data: {
                nodes: [] as NodeObject[],
                links: [] as LinkObject[]
            }
        }
        let isLinked: boolean = true
        const { nodes, links } = graphData
        const nodeArrTrimmedLC = nodeArr.map(nodeName => nodeName.trim().toLowerCase())

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
            if(!isLinked) historyDelete.data.links.push(link)
            return isLinked
        })

        const filteredNodes = nodes
            .filter(node => !nodeArrTrimmedLC.includes(node.id.toLowerCase()))

        const indexFilteredNodes = nodeIndex(0, filteredNodes)
        historyDelete.data.nodes = getNodesDiff(links)

        const updatedGraphData = {
            nodes: indexFilteredNodes,
            links: filteredLinks
        }
        return updatedGraphData
    }
    else {
        console.log(`incorrect input: ${this}`)
        return graphData
    }
}