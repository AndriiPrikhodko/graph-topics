import { useEffect } from 'react'
import GraphView from "./components/right-side/GraphView"
import LeftView from "./components/left-side/LeftView"
import { useSelector, useDispatch } from 'react-redux'
import { setGraphData } from "./reducers/graph.reducer"
import { setGraphDataLocal } from './helpers/local-storage'
import RouteComponents from './pages/Router'
import { Routes, Route, Navigate } from "react-router-dom"

const App = () => {
  const graphData = useSelector((store: Store) => store.graphData)

  const dispatch = useDispatch()

  useEffect(() => {
    const localStoreGraphStr = localStorage.getItem('react-graph-app-data')
    if (typeof localStoreGraphStr === 'string') 
      {
        const savedGraph = JSON.parse(localStoreGraphStr)
        if (savedGraph) {
          setGraphDataLocal(savedGraph)
          dispatch(setGraphData(savedGraph))
        }
    }
    
  }, [dispatch])

  return (
    <Routes>
      {RouteComponents}
    </Routes>
  )
}

export default App;
