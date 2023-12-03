/**
 * 
 * @param this 
 * @param graphData 
 * @returns updatedGraphData where links from the input list are removed
 */
export const removeEdge = function (this: string, graphData :GraphData): GraphData {
    let islinked: boolean = false

    const edgeArr = this.split(',')

    if (edgeArr.length === 2) {
      const [source, target] = edgeArr
      const trimmedSource = source.trim()
      const trimmedTarget = target.trim()
      const nodes = graphData.nodes
      const isSource = nodes.find(node => node.id === trimmedSource)
      const isTarget = nodes.find(node => node.id === trimmedTarget)
      let updateLinks = graphData.links
      if (isSource !== undefined && isTarget !== undefined) {
        updateLinks = graphData
        .links
        .filter(link => {
          if (typeof link.source !== 'string' && typeof link.target !== 'string') {
            islinked = !((link.source.id === trimmedSource || link.source.id === trimmedTarget)
            && (link.target.id === trimmedSource || link.target.id === trimmedTarget))
          } else {
            islinked = !((link.source === trimmedSource || link.source === trimmedTarget)
            && (link.target === trimmedSource || link.target === trimmedTarget))
          }
          return islinked
        })
      }
      return {
          nodes: nodes,
          links: updateLinks
        }
    } else {
      console.log(`incorrect input: ${this}`)
      return graphData
    }
  }