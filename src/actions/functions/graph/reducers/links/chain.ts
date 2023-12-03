export const linkChain = (nodeNames: string []) => {
    let linkDiff: GraphData["links"] = []
    linkDiff = nodeNames
          .reduce((acc, node, index, arr) => {
          if(index < arr.length - 1)
          {
            acc.push({
              source: node,
              target: arr[index+1]
            })
          }
          return acc
        }, linkDiff)
    return linkDiff
  }