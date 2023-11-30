import IconFactory from '../shared/actions/actionIcon.factory'
import './ActionMenu.css'

const ActionMenu: React.FC = () => {
  return (
    <div className='action-wrapper-header'>
      <IconFactory iconName='addGraphEdge' label="link nodes" onClick={() => {}}/>
      <IconFactory iconName='removeGraphEdge' label="unlink nodes" onClick={() => {}}/>
      <IconFactory iconName='deleteGraphNode' label="delete node" onClick={() => {}}/>
      <IconFactory iconName='cancelIcon' label="cancel action" onClick={() => {}}/>
    </div>
  );
};

export default ActionMenu