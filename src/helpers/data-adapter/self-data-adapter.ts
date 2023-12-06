export const selfDataAdapter = (reactForceGraph2dData: GraphData) => {
    if(reactForceGraph2dData &&
        reactForceGraph2dData.nodes !== undefined &&
        reactForceGraph2dData !== undefined) {
        const nodes = reactForceGraph2dData.nodes.map((n, idx) => {
            n.index = idx
            n.vx = 0
            n.vy = 0
            return n
        })
        const links = reactForceGraph2dData.links
            .map((link, idx) => {
                link.index = idx
                link.source = typeof link.source !== 'string' ? link.source.id : link.source
                link.target = typeof link.target !== 'string' ? link.target.id : link.target
                return link
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