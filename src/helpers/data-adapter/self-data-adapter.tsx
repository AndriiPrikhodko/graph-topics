export const selfDataAdapter = (reactForceGraph2dData: IGraphData) => {
    if(reactForceGraph2dData &&
        reactForceGraph2dData.nodes !== undefined &&
        reactForceGraph2dData !== undefined) {
            const nodes = reactForceGraph2dData.nodes.map(node => {
                return {
                    "id": node.id
                }
            })
            const links = reactForceGraph2dData.links.map(link => {
                return {
                    "source": typeof link.source !== 'string' ? link.source.id : link.source,
                    "target": typeof link.target !== 'string' ? link.target.id : link.target,
                }
            })
            return {
                nodes,
                links
            }
    } else {
        console.log('no reactForceGraph2dData provided')
            return {
                nodes: [],
                links: []
            }
    }
}