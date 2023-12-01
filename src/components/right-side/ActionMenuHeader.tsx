import IconFactory from '../shared/actions/actionIcon.factory'
import './ActionMenu.css'
import { useDispatch, useSelector } from 'react-redux';
import { setGraphFunction } from '../../reducers/common.reducer';

const ActionMenu: React.FC = () => {
  const despatch = useDispatch()
  const graphFunction = useSelector((store: Store) => 
        store.common.graphFunction)

  return (
    <div className='action-wrapper-header'>
      <IconFactory iconName='addGraphEdge' label="link nodes" 
        onClick={() => {despatch(setGraphFunction('addGraphEdge'))}}
        selected={graphFunction === 'addGraphEdge'}
        />
      <IconFactory iconName='removeGraphEdge' label="unlink nodes"
        onClick={() => {despatch(setGraphFunction('removeGraphEdge'))}}
        selected={graphFunction === 'removeGraphEdge'}
        />
      <IconFactory iconName='deleteGraphNode' label="delete node"
        onClick={() => {despatch(setGraphFunction('deleteGraphNode'))}}
        selected={graphFunction === 'deleteGraphNode'}
        />
      <IconFactory iconName='cancelIcon' label="cancel action"
        onClick={() => {despatch(setGraphFunction(null))}}
        selected={graphFunction === null} />
    </div>
  );
};

export default ActionMenu