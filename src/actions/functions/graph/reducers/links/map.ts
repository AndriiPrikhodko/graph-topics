export const linkBijection = (nodeNames: string []) => {
    let linkDiff: GraphData["links"] = []
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
  