/**
 * 
 * @param nodeNames 
 * @returns links array where nodes are attached to the first one
 */
export const linkFrom = (nodeNames: string []): LinkObject[] => {
    let linkDiff: LinkObject[] = []
    const firstNode = nodeNames[0]
    linkDiff = nodeNames
          .reduce((acc, node) => {
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