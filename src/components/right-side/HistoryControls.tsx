import IconFactory from '../shared/actions/actionIcon.factory'

const HistoryControls: React.FC = () => {
    return (
        <div className='history-wrapper header-item'>
            <IconFactory iconName='undo' label="undo action" onClick={() => {}}/>
            <IconFactory iconName='redo' label="redo action" onClick={() => {}}/>
        </div>
    )
}

export default HistoryControls