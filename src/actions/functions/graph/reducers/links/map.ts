/**
 * 
 * @param nodeNames 
 * @returns links array where nodes from first half of the array 
 * attached to the nodes form second half of the array pairwise
 */
export const linkBijection = (nodeNames: string []): LinkObject[] => {
    let linkDiff: LinkObject[] = []
    if (nodeNames.length % 2 === 0) {
      const arrayMiddle = nodeNames.length / 2
      for (let i = 0; i < arrayMiddle; i ++) {
        linkDiff.push({
            source: nodeNames[i],
            target: nodeNames[arrayMiddle + i]
        })
      }
    }
  
    else {
      console.warn('bijection link require even number of nodes')
    }
  
    return linkDiff
  }
  