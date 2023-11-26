import AddEdgeIcon from '../shared/actions/AddEdgeIcon'
import RemoveEdgeIcon from '../shared/actions/RemoveEdgeIcon'
import DeleteNodeIcon from '../shared/actions/DeleteGraphNode'
import CancelIcon from '../shared/actions/Cancelcon';
import './ActionMenu.css'

const Button: React.FC = () => {
  return (
    <div className='action-wrapper-header'>
        <AddEdgeIcon label="link nodes" onClick={() => {}}/>
        <RemoveEdgeIcon label="unlink nodes"  onClick={() => {}}/>
        <DeleteNodeIcon label="delete node"  onClick={() => {}}/>
        <CancelIcon label="cancel action"  onClick={() => {}}/>
    </div>
  );
};

export default Button