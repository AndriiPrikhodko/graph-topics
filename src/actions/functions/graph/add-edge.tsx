type Edge = {
  edge: string
}

// (this: Edge, graphData :IGraphData & {bind?: (this: Edge) => Edge} )
export function addEdge(this: Edge, graphData :IGraphData & {bind?: Function}): IGraphData {
        const edgeArr = this.edge.split(',')
        if (edgeArr.length === 2) {
          const [source, target] = edgeArr
          const trimmedSource = source.trim()
          const trimmedTarget = target.trim()
          let upadateNodes = graphData.nodes
          const isSource = upadateNodes.find(node => node.id === trimmedSource)
          const isTarget = upadateNodes.find(node => node.id === trimmedTarget)
          if(isSource === undefined) upadateNodes.push({
            id: trimmedSource,
          })
          if(isTarget === undefined) upadateNodes.push({
            id: trimmedTarget,
          })
          const updateLinks = [
            ...graphData.links,
            {
              source: trimmedSource,
              target: trimmedTarget
            }
          ]
          return  {
              nodes: upadateNodes,
              links: updateLinks
            }
        }
        else {
          console.log(`incorrect input: ${this.edge}`)
          return graphData
        }
}