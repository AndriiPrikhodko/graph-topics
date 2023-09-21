import ActionOption from './ActionOption'
import { actionList } from './ActionList'
import './Menu.css'

const ActionMenu: React.FC = () => {
    return (
    <div>
        {actionList.map(action => {
            return <ActionOption 
                label={action.label}
                placeholder={action.placeholder}
                actionFunction={action.handleName}
                />
        })}
    </div>
    )
}

export default ActionMenu