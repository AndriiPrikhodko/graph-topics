export const setGraphDataLocal = (gData: GraphData) => {
    localStorage.setItem(
        'react-graph-app-data',
        JSON.stringify(gData)
    )
}