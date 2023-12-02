export const deleteNode = function (this: string, graphData :GraphData): GraphData {
    let isLinked: boolean = true

    const nodeTrimmed = this.trim()
    const nodes = graphData.nodes
    const links = graphData.links
    const filteredNodes = nodes
      .filter(node => node.id !== nodeTrimmed)
    const filteredLinks = links
      .filter(link => {
        if (typeof link.source !== 'string' && typeof link.target !== 'string') {
          isLinked = !(link.source.id === nodeTrimmed || link.target.id === nodeTrimmed)
        }
        else {
          isLinked = !(link.source === nodeTrimmed || link.target === nodeTrimmed)
        }
        return isLinked
      })
    return {
        nodes: filteredNodes,
        links: filteredLinks
      }
  }