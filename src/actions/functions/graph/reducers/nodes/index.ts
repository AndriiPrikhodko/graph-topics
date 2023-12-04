
/**
 *
 * @param trimmedNodes
 * @param graphData
 * @returns [nodeNames, nodeDiff] tuple  of correct names and new nodes
 */
export const nodeDiffReducer =
  (trimmedNodes: string[], graphData: GraphData): [string[], NodeObject[]] => {
      let nodeDiff: NodeObject[] = []
      let nodeNames: string[] = []

      trimmedNodes
          .reduce((nodeDiff, item) => {
              const existingNodeIndex = graphData.nodes.findIndex(
                  node => item.toLowerCase() === node.id?.toLowerCase())
              if(existingNodeIndex > -1) {
                  nodeNames.push((graphData.nodes[existingNodeIndex].id))
              }
              else {
                  nodeNames.push(item)
                  nodeDiff.push({id: item})
              }
              return nodeDiff
          }, nodeDiff)
      return [nodeNames, nodeDiff]
  }
