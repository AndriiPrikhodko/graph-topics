import ActionOption from './ActionOption'
import { actionList } from './ActionList'
import { useDispatch } from 'react-redux'
import { setLinkType } from '../../../../reducers/common.reducer'
import './Menu.css'

const ActionMenu: React.FC = () => {
    const dispatch = useDispatch()
    const handleChange:React.ChangeEventHandler<HTMLSelectElement> = 
    (event) => {
        dispatch(setLinkType(event.target.value));
      };

    return (
    <div>
        <select onChange={handleChange}>
            <option value="from">From</option>
            <option value="chain">Chain</option>
            <option value="bijection">Bijection</option>
            <option value="into">Into</option>
        </select>
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