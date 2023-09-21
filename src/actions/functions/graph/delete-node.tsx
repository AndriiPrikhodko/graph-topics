type Node = {
    node: string
}

export const deleteNode = function (this: Node, graphData :IGraphData & {bind?: Function}): IGraphData {
    let isLinked: boolean = true

    const nodeTrimmed = this.node.trim()
    const nodes = graphData.nodes
    const links = graphData.links
    const filteredNodes = nodes
      .filter(node => node.id !== nodeTrimmed)
    const filteredLinks = links
      .filter(link => {
        if (typeof link.source !== 'string' && typeof link.target !== 'string') {
          isLinked = !(link.source.id === nodeTrimmed || link.target.id === nodeTrimmed)
        }
        return isLinked
      })
    return {
        nodes: filteredNodes,
        links: filteredLinks
      }
  }