import { ChangeEventHandler, KeyboardEvent, RefAttributes } from 'react'
import './Menu.css'
import { useSelector, useDispatch } from 'react-redux'
import { setGraphData } from '../../../../reducers/graph.reducer'
import graphFnFacade from '../../../../actions/graph-fn.facade'
import { ImCancelCircle } from 'react-icons/im'
import { clone } from 'ramda'
import React, { useState, useRef } from 'react'
import { setGraphDataLocal } from '../../../../helpers/local-storage'
import IconFactory from '../../../shared/actions/actionIcon.factory'

type Props = {
    label: string,
    placeholder: string
    actionFunction: 'addGraphEdge' | 'removeGraphEdge' | 'deleteGraphNode'
    style?: React.CSSProperties
}

const ActionOption: React.FC<Props> = ({ label, placeholder, actionFunction }) => {
    const dispatch = useDispatch()
    const data = useSelector((store: Store) => store.graphData)
    const linkType = useSelector((store: Store) => store.common.type)
    const inputRef = useRef(null)

    const [inputValue, setInputValue] = useState('')

    const applyGraphFunction = (strValue: string) => {
        const actionFunctionObj = Object.getOwnPropertyDescriptors(graphFnFacade)
        const getActionFunction = actionFunctionObj[actionFunction].value
        if(getActionFunction) {
            const mutableData = clone(data)
            let updatedGraphData
            if(actionFunction === 'addGraphEdge') {
                updatedGraphData =
                    getActionFunction
                        .call(strValue, mutableData, linkType)
            }
            else {
                updatedGraphData =
                    getActionFunction.call(strValue, mutableData)
            }
            setGraphDataLocal(updatedGraphData)
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
     = event => {
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
            <IconFactory
                iconName={actionFunction === 'addGraphEdge' ?
                    linkType: actionFunction}
                onClick={actionIconClick} label={label} />
            <input
                ref={inputRef}
                className="edge-input"
                type="text"
                placeholder={placeholder}
                onKeyDown={handleActionOnEnter}
                onChange={handleInputChange}
                data-testid={`action-${actionFunction}`}
            ></input>
            {inputValue && (
                <ImCancelCircle onClick={handleClearInput} className='icon-right' data-testid={`clear-${actionFunction}`}/>
            )}
        </label>
    </div>
}

export default ActionOption
