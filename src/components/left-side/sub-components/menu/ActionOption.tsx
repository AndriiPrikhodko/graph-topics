import { KeyboardEvent } from "react"
import './Menu.css'
import { useSelector, useDispatch } from 'react-redux'
import * as actions from '../../../../actions/graph.action'

type Props = {
    label: string,
    placeholder: string
    actionFunction: string
}

const ActionOption: React.FC<Props> = ({ label, placeholder, actionFunction }) => {
    const dispatch = useDispatch()

    const handleActionOnEnter = (event: KeyboardEvent): void =>  {
        const actionFunctionObj = Object.getOwnPropertyDescriptors(actions)
        const getActionFunction = actionFunctionObj[actionFunction]['get']
        const target  = event.target as HTMLButtonElement
        if (event.key === 'Enter' && target && getActionFunction) {
            dispatch(getActionFunction()(target.value))
        }
    }

    return <div className="data-input">
            <label className="unselectable">{label}
                <input 
                className="edge-input"
                type="text"
                placeholder={placeholder}
                onKeyDown={handleActionOnEnter}
                ></input>
            </label>
        </div>
}

export default ActionOption