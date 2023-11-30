import IconFabrica from '../shared/actions/actionIcon.fabrica'

const HistoryControls: React.FC = () => {
    return (
      <div className='history-wrapper header-item'>
        <IconFabrica iconName='undo' label="undo action" onClick={() => {}}/>
        <IconFabrica iconName='redo' label="redo action" onClick={() => {}}/>
      </div>
    );
  };
  
  export default HistoryControls