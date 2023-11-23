export const setGraphDataLocal = (gData: IGraphData) => {
    localStorage.setItem(
        'react-graph-app-data', 
      JSON.stringify(gData)
      )
}