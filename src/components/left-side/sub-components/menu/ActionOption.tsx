import { KeyboardEvent } from "react"
import './Menu.css'
import { useSelector, useDispatch } from 'react-redux'
import { setGraphData } from '../../../../reducers/graph.reducer'
import graphFnFacade from '../../../../actions/graph-fn.facade'
import { clone } from 'ramda'


type Props = {
    label: string,
    placeholder: string
    actionFunction: string
}

const ActionOption: React.FC<Props> = ({ label, placeholder, actionFunction }) => {
    const dispatch = useDispatch()
    const data = useSelector((store: Store) => store.graphData)
    
    const handleActionOnEnter = (event: KeyboardEvent): void =>  {
        if (event.key === 'Enter') {
            const actionFunctionObj = Object.getOwnPropertyDescriptors(graphFnFacade)
            const getActionFunction = actionFunctionObj[actionFunction].value
            const target  = event.target as HTMLButtonElement
         if(target && getActionFunction) {
            const mutableData = clone(data)
            const updatedGraphData = getActionFunction.call(target.value.toString(), mutableData)
            dispatch(setGraphData(updatedGraphData))
            }
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