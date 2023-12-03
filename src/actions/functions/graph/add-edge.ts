import { nodeDiffReducer } from './reducers/nodes'
import linkFacade from './reducers/links'
import { nodeIndex } from '../../../helpers/data-adapter/node-indexer'

/**
 * 
 * @param this is a string representing nodes separated with comma
 * @param graphData 
 * @param linkType is responsible to linking strategy
 * @returns updatedGraphData is updated data including new nodes and links
 */
export function addEdge(this: string, graphData: GraphData, linkType: LinkType ='from'): GraphData{
  const edgeArr = this.split(',')
  if (edgeArr.length > 1) {
    const length = graphData.nodes.length
    const trimmedNodes = edgeArr.map(nodeName => nodeName.trim())

    // gathering correct node names and calculating node diff
    // some names already exists in the graph and should be taken from there
    let  [nodeNames, nodeDiff] = nodeDiffReducer(trimmedNodes, graphData)

    // filtering for uniqueness and indexing new nodes
    const indxNodeDiff = nodeIndex(length, nodeDiff)

    // initializing new links depending on selected type
    let linkDiff = linkFacade[linkType](nodeNames)

    // updating links and nodes with new data
    const updatedLinks = [
      ...graphData.links,
      ...linkDiff
    ]

    const updatedNodes = [
      ...graphData.nodes,
      ...indxNodeDiff
    ]

    return  {
        nodes: updatedNodes,
        links: updatedLinks
      }
  }
  else {
    console.log(`incorrect input: ${this}`)
    return graphData
  }
} 
