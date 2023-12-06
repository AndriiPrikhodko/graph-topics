import IconFactory from '../shared/actions/actionIcon.factory'
import './ActionMenu.css'
import { useDispatch, useSelector } from 'react-redux'
import { setGraphFunction, setEditMode } from '../../reducers/common.reducer'

const ActionMenu: React.FC = () => {
    const despatch = useDispatch()
    const graphFunction = useSelector((store: Store) =>
        store.common.graphFunction)

    return (
        <div className='action-wrapper-header'>
            <IconFactory iconName='addGraphEdge' label="link nodes"
                onClick={() => {
                    despatch(setGraphFunction('addGraphEdge'))
                    despatch(setEditMode(true))
                }}
                selected={graphFunction === 'addGraphEdge'}
            />
            <IconFactory iconName='removeGraphEdge' label="unlink nodes"
                onClick={() => {
                    despatch(setGraphFunction('removeGraphEdge'))
                    despatch(setEditMode(true))
                }}
                selected={graphFunction === 'removeGraphEdge'}
            />
            <IconFactory iconName='deleteGraphNode' label="delete node"
                onClick={() => {
                    despatch(setGraphFunction('deleteGraphNode'))
                    despatch(setEditMode(true))
                }}
                selected={graphFunction === 'deleteGraphNode'}
            />
            <IconFactory iconName='cancelIcon' label="cancel action"
                onClick={() => {
                    despatch(setGraphFunction(null))
                    despatch(setEditMode(false))
                }}
                disabled={graphFunction === null}
            />
        </div>
    )
}

export default ActionMenu