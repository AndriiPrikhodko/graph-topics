import Graph from './graph-engine/graph'
import GraphHeader from './GraphHeader'
import { useDispatch } from 'react-redux'
import { setEditMode, setGraphFunction } from '../../reducers/common.reducer'
import './GraphView.css'

const GraphView: React.FC = () => {
    const dispatch = useDispatch()

    const handleOnBlur:React.FocusEventHandler<HTMLDivElement> = event => {
        dispatch(setEditMode(false))
        dispatch(setGraphFunction(null))
    }

    return (
        <div
            className="graph-view split-large right"
            id="graph"
            data-testid='right-view'
            onBlur={handleOnBlur}
            tabIndex={0}
        >
            <GraphHeader />
            <Graph />
        </div>
    )
}

export default GraphView