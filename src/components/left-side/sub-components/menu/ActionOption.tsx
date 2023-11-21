import { KeyboardEvent } from "react"
import './Menu.css'
import { useSelector, useDispatch } from 'react-redux'
import { setGraphData } from '../../../../reducers/graph.reducer'
import graphFnFacade from '../../../../actions/graph-fn.facade'
import { FaUnlink, FaLink } from "react-icons/fa";
import { FaMinusCircle } from "react-icons/fa"
import { MdOutlineClear } from "react-icons/md";
import { clone } from 'ramda'
import React from 'react'
import { IconType } from 'react-icons/lib'


type Props = {
    label: string,
    placeholder: string
    actionFunction: string
}

interface IIconObject {
    [key: string]: IconType; // This is the string index signature
  }

const actionIcons: IIconObject = {
    addGraphEdge: FaLink,
    removeGraphEdge: FaUnlink,
    deleteGraphNode: FaMinusCircle
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

    return <div className="data-input" data-testid={actionFunction}>
            <label className="unselectable">
                {(() => {
                        const icon: IconType = actionIcons[actionFunction];
                        if (icon) {
                            return React.createElement(icon, {className: 'action-icon', title: `${label}`, id: 'icon-actionFunction'});
                        } else {
                            console.error(`No icon found for action function: ${actionFunction}`);
                        }
                        return null;
                })()}
                <input 
                className="edge-input"
                type="text"
                placeholder={placeholder}
                onKeyDown={handleActionOnEnter}
                ></input>
                <MdOutlineClear />
            </label>
        </div>
}

export default ActionOption