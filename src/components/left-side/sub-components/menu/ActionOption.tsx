import { ChangeEventHandler, KeyboardEvent, RefAttributes } from "react"
import './Menu.css'
import { useSelector, useDispatch } from 'react-redux'
import { setGraphData } from '../../../../reducers/graph.reducer'
import graphFnFacade from '../../../../actions/graph-fn.facade'
import { FaUnlink, FaLink } from "react-icons/fa";
import { FaMinusCircle } from "react-icons/fa"
import { MdOutlineClear } from "react-icons/md";
import { clone } from 'ramda'
import React, { useState, useRef } from 'react'
import { IconType } from 'react-icons/lib'


type Props = {
    label: string,
    placeholder: string
    actionFunction: string
    style?: React.CSSProperties
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
    const inputRef = useRef(null)

    const [inputValue, setInputValue] = useState('')

    const applyGraphFunction = (strValue: string) => {
        const actionFunctionObj = Object.getOwnPropertyDescriptors(graphFnFacade)
        const getActionFunction = actionFunctionObj[actionFunction].value
        if(getActionFunction) {
            const mutableData = clone(data)
            const updatedGraphData = getActionFunction.call(strValue, mutableData)
            dispatch(setGraphData(updatedGraphData))
        }
        else console.log('action is not in the list')
    }

    const cleanUpInput = () => {
        const current = inputRef.current as null | object & {value?: string}
        if (current && current.value) {
            current.value = ''
            setInputValue('')
        }
    }
    
    const handleActionOnEnter = (event: KeyboardEvent): void =>  {
        if (event.key === 'Enter') {
            const target  = event.target as HTMLButtonElement
         if(target) {
            applyGraphFunction(target.value.toString())
            }
            if(actionFunction !== 'addGraphEdge') {
                cleanUpInput()
            }
        }
    }

    const handleInputChange: ChangeEventHandler<HTMLInputElement>
     = (event) => {
        const target = event.target
        if (target && target.value){
            setInputValue(target.value)
        }
        else setInputValue('')
      }
    

    const handleClearInput = () => {
        cleanUpInput()
    }

    const actionIconClick = () => {
        if (inputValue) {
            applyGraphFunction(inputValue)
            if(actionFunction !== 'addGraphEdge') {
                cleanUpInput()
            }
        }
    }

    return <div className="data-input menu-item" data-testid={actionFunction}>
            <label className="unselectable">
                {(() => {
                        const icon: IconType = actionIcons[actionFunction];
                        if (icon) {
                            return React.createElement(icon, 
                                {
                                    className: 'action-icon', 
                                    title: `${label}`, 
                                    id: 'icon-actionFunction',
                                    onClick: actionIconClick
                                });
                        } else {
                            console.error(`No icon found for action function: ${actionFunction}`);
                        }
                        return null;
                })()}
                <input 
                    ref={inputRef}
                    className="edge-input"
                    type="text"
                    placeholder={placeholder}
                    onKeyDown={handleActionOnEnter}
                    onChange={handleInputChange}
                ></input>
                {inputValue && (
                    <MdOutlineClear onClick={handleClearInput}/>
                )}
            </label>
        </div>
}

export default ActionOption
