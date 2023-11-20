import { useEffect } from 'react'
import GraphView from "./components/right-side/GraphView"
import LeftView from "./components/left-side/LeftView"
import { useSelector, useDispatch } from 'react-redux'
import { setGraphData } from "./reducers/graph.reducer"

const App = () => {
  const graphData = useSelector((store: Store) => store.graphData)

  const dispatch = useDispatch()

  useEffect(() => {
    const localStoreGraphStr = localStorage.getItem('react-graph-app-data')
    if (typeof localStoreGraphStr === 'string') 
      {
        const savedGraph = JSON.parse(localStoreGraphStr)
        if (savedGraph) {
          dispatch(setGraphData(savedGraph))
        }
    }
    
  }, [dispatch])

  return (
    <div className="container"> 
      <LeftView />
      <GraphView />
    </div>
  )
}

export default App;
