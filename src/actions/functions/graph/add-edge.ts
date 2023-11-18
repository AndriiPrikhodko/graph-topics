

// (this: Edge, graphData :IGraphData & {bind?: (this: Edge) => Edge} )
export function addEdge(this: string, graphData :IGraphData): IGraphData {
        const edgeArr = this.split(',')
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
          console.log(`incorrect input: ${this}`)
          return graphData
        }
}