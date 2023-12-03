export const linkFrom = (nodeNames: string []) => {
    let linkDiff: GraphData["links"] = []
    const firstNode = nodeNames[0]
    linkDiff = nodeNames
          .reduce((acc, node, index, arr) => {
          if(node.toLowerCase() !== firstNode.toLowerCase())
          {
            acc.push({
              source: firstNode,
              target: node
            })
          }
          return acc
        }, linkDiff)
    return linkDiff
  }