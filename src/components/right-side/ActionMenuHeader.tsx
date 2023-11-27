import IconFabrica from '../shared/actions/actionIcon.fabrica'
import './ActionMenu.css'

const Button: React.FC = () => {
  return (
    <div className='action-wrapper-header'>
      <IconFabrica iconName='addGraphEdge' label="link nodes" onClick={() => {}}/>
      <IconFabrica iconName='removeGraphEdge' label="unlink nodes" onClick={() => {}}/>
      <IconFabrica iconName='deleteGraphNode' label="delete node" onClick={() => {}}/>
      <IconFabrica iconName='cancelIcon' label="cancel action" onClick={() => {}}/>
    </div>
  );
};

export default Button