export const linkInto = (nodeNames: string []) => {
    let linkDiff: GraphData["links"] = []
    const lastNode = nodeNames[nodeNames.length - 1]
    linkDiff = nodeNames
          .reduce((acc, node, index, arr) => {
          if(node.toLowerCase() !== lastNode.toLowerCase())
          {
            acc.push({
              source: node,
              target: lastNode
            })
          }
          return acc
        }, linkDiff)
    return linkDiff
  }