/**
 * 
 * @param nodeNames 
 * @returns links array where nodes attached to the last node
 */
export const linkInto = (nodeNames: string []): LinkObject[] => {
    let linkDiff: LinkObject[] = []
    const lastNode = nodeNames[nodeNames.length - 1]
    linkDiff = nodeNames
          .reduce((acc, node) => {
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