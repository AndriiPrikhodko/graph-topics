import IconFactory from '../shared/actions/actionIcon.factory'
import { useSelector, useDispatch } from 'react-redux'
import { undo, redo } from '../../reducers/history.reducer'
import { setGraphData } from '../../reducers/graph.reducer'
import { addDiff } from '../../actions/history/add-diff'
import { removeDiff } from '../../actions/history/delete-diff'
import { clone } from 'ramda'
import { selfDataAdapter } from '../../helpers/data-adapter/self-data-adapter'

const HistoryControls: React.FC = () => {
    const dispatch = useDispatch()
    const latest = useSelector((store: Store) => store.history.latest)
    const pointer = useSelector((store: Store) => store.history.pointer)
    const historyData = useSelector((store: Store) => store.history.data)
    const graphData = useSelector((store: Store) => store.graphData)
    const undoDisabled = pointer <= 0

    const regressGraph =
    (pointer: number, historyData: HistoryItem[], graphData: GraphData) =>
    {
        if(historyData.length > 0) {
            const {type, data: diff} = historyData[pointer]
            let updatedGraphData = type === 'add' ?
                removeDiff(graphData, diff) :
                addDiff(graphData, diff)
            dispatch(setGraphData(updatedGraphData))
        }
    }

    const progressGraph =
    (pointer: number, historyData: HistoryItem[], graphData: GraphData) =>
    {
        if(historyData.length > 0) {
            const {type, data: diff} = historyData[pointer + 1]
            let updatedGraphData = type === 'add' ?
                addDiff(graphData, diff) :
                removeDiff(graphData, diff)
            dispatch(setGraphData(selfDataAdapter(updatedGraphData)))
        }
    }

    const onClickUndoHandler = () => {
        regressGraph(pointer, historyData, graphData)
        dispatch(undo())
    }

    const onClickRedoHandler = () => {
        progressGraph(pointer, historyData, graphData)
        dispatch(redo())
    }

    return (
        <div className='history-wrapper header-item'>
            <IconFactory iconName='undo' label="undo action" onClick={onClickUndoHandler} disabled={undoDisabled}/>
            <IconFactory iconName='redo' label="redo action" onClick={onClickRedoHandler} disabled={latest}/>
        </div>
    )
}

export default HistoryControls