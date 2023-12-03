/**
 * 
 * @param this 
 * @param graphData 
 * @returns updatedGraphData with nodes from the input list
 *  and all their links are removed
 */
export const deleteNode = function (this: string, graphData :GraphData): GraphData {
  const nodeArr = this.split(',')
  if (nodeArr.length > 1) {
    let isLinked: boolean = true
    const { nodes, links } = graphData
    const nodeArrTrimmedLC = nodeArr.map(nodeName => nodeName.trim().toLowerCase())

    const filteredLinks = links.filter(link => {
            isLinked = !(
              (
                typeof link.source == 'string' ? 
                nodeArrTrimmedLC.includes(link.source.toLowerCase()) :
                nodeArrTrimmedLC.includes(link.source.id.toLowerCase())
              ) || (
                typeof link.target == 'string' ? 
                nodeArrTrimmedLC.includes(link.target.toLowerCase()) :
                nodeArrTrimmedLC.includes(link.target.id.toLowerCase())
              )
            )
          return isLinked
        })
    
    const filteredNodes = nodes
        .filter(node => !nodeArrTrimmedLC.includes(node.id.toLowerCase()))

    return {
        nodes: filteredNodes,
        links: filteredLinks
      }
    }
    else {
      console.log(`incorrect input: ${this}`)
      return graphData
    }
  }