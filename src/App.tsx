import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setGraphData } from './reducers/graph.reducer'
import { setGraphDataLocal } from './helpers/local-storage'
import RouteComponents from './pages/Router'
import { Routes } from 'react-router-dom'
import { selfDataAdapter } from './helpers/data-adapter/self-data-adapter'

const App = () => {
    const graphData = useSelector((store: Store) => store.graphData)

    const dispatch = useDispatch()

    useEffect(() => {
        const localStoreGraphStr = localStorage.getItem('react-graph-app-data')
        if (typeof localStoreGraphStr === 'string')
        {
            const savedGraph = JSON.parse(localStoreGraphStr)
            if (savedGraph) {
                const gData = selfDataAdapter(savedGraph)
                setGraphDataLocal(gData)
                dispatch(setGraphData(gData))
            }
        }

    }, [dispatch])

    return (
        <Routes>
            {RouteComponents}
        </Routes>
    )
}

export default App
