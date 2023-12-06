export const addDiff =
    (graphData: GraphData, diffGraphData: GraphData) => {
        // re-index nodes ?
        graphData = {
            nodes: [
                ...graphData.nodes,
                ...diffGraphData.nodes],
            links: [
                ...graphData.links,
                ...diffGraphData.links
            ]
        }
        return graphData
    }