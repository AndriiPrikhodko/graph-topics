export function addEdge(this: string, graphData :IGraphData): IGraphData {
  const edgeArr = this.split(',')
  if (edgeArr.length > 1) {
    const trimmedNodes = edgeArr.map(node => node.trim())
    
    let nodeDiff: IGraphData["nodes"] = []
    let linkDiff: IGraphData["links"] = []
    let nodeNames: string[] = []

    trimmedNodes
            .reduce((nodeNames, item) => {
                const existingNodeIndex = graphData.nodes.findIndex(
                    node => item.toLowerCase() === node.id.toLowerCase())
                if(existingNodeIndex > -1) {
                    nodeNames.push(graphData.nodes[existingNodeIndex].id)
                }
                else {
                    nodeDiff.push({id: item})
                    nodeNames.push(item)
                }
                return nodeNames
            }, nodeNames)

    linkDiff = nodeNames
        .reduce((acc, node, index, arr) => {
        if(node.toLowerCase() !== nodeNames[0].toLowerCase())
        {
          acc.push({
            source: nodeNames[0],
            target: arr[index]
          })
        }
        return acc
      }, linkDiff)

    const updatedLinks = [
      ...graphData.links,
      ...linkDiff
    ]

    const gNodes = [
      ...graphData.nodes,
      ...nodeDiff
    ]
    return  {
        nodes: gNodes,
        links: updatedLinks
      }
  }
  else {
    console.log(`incorrect input: ${this}`)
    return graphData
  }
} 
