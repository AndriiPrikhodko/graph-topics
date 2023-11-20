

// (this: Edge, graphData :IGraphData & {bind?: (this: Edge) => Edge} )
export function addEdge(this: string, graphData :IGraphData): IGraphData {
        const edgeArr = this.split(',')
        if (edgeArr.length === 2) {
          const [source, target] = edgeArr
          const trimmedSource = source.trim()
          const trimmedTarget = target.trim()
          let upadateNodes = graphData.nodes
          const findSource = upadateNodes.find(node => node.id.toLowerCase() === trimmedSource.toLowerCase())
          const findTarget = upadateNodes.find(node => node.id.toLowerCase() === trimmedTarget.toLowerCase())
          if(findSource === undefined) upadateNodes.push({
            id: trimmedSource,
          })
          if(findTarget === undefined) upadateNodes.push({
            id: trimmedTarget,
          })
          const updateLinks = [
            ...graphData.links,
            {
              source: findSource?.id ? findSource.id : trimmedSource,
              target: findTarget?.id ? findTarget.id : trimmedTarget
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