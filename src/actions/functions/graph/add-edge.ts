const linkFrom = (nodeNames: string []) => {
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

const linkInto = (nodeNames: string []) => {
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

const linkChain = (nodeNames: string []) => {
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

const linkBijection = (nodeNames: string []) => {
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

const linkFacade = {
  from: linkFrom,
  chain: linkChain,
  bijection: linkBijection,
  into: linkInto
}

export function addEdge(this: string, graphData :GraphData, linkType: LinkType ='from'): GraphData {
  const edgeArr = this.split(',')
  if (edgeArr.length > 1) {
    const trimmedNodes = edgeArr.map(node => node.trim())
    
    let nodeDiff: NodeObject[] = []
    let linkDiff: LinkObject[] = []
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
    
    linkDiff = linkFacade[linkType](nodeNames)

    const updatedLinks = [
      ...graphData.links,
      ...linkDiff
    ]

    const updatedNodes = [
      ...graphData.nodes,
      ...nodeDiff
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
