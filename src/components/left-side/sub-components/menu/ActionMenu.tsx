import ActionOption from './ActionOption'
import { actionList } from './ActionList'
import { useDispatch } from 'react-redux'
import { setLinkType } from '../../../../reducers/common.reducer'
import Select from '../../../shared/select'
import './Menu.css'

const ActionMenu: React.FC = () => {
    const optionList = [
        'from',
        'chain',
        'bijection',
        'into'
    ]

    const dispatch = useDispatch()
    const handleChange:React.ChangeEventHandler<HTMLSelectElement> =
    event => {
        dispatch(setLinkType(event.target.value))
    }

    return (
        <div>
            <Select
                optionList={optionList}
                onChange={handleChange}
                testid={'link-strategy'}
                label='pick the link strategy'
                className='menu-select'
            />
            {actionList.map((action, idx) => {
                return <ActionOption
                    key={idx}
                    label={action.label}
                    placeholder={action.placeholder}
                    actionFunction={action.handleName}
                />
            })}
        </div>
    )
}

export default ActionMenu