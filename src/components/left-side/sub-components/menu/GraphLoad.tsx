import React, { useState, useEffect, MouseEvent, ChangeEvent } from "react"
import { setGraphData } from "../../../../reducers/graph.reducer"
import { graphAPI } from "../../../../api/graph.api"
import {selfDataAdapter} from "../../../../helpers/data-adapter/self-data-adapter"
import Dropdown from "./Dropdown"
import { useSelector, useDispatch } from "react-redux"
import { loadGraphList } from "../../../../actions/graph-api.action"



const GraphLoad: React.FC = () => {
    const dispatch = useDispatch()
    const graphList = useSelector((store: Store) => store.graphList)
    const [menuOption, setMenuOption] = useState<string>('')
    const [menuValue, setMenuValue] = useState<string>('')

    useEffect(() => {
        try {
            dispatch(loadGraphList())
        } catch (err) {
            console.error(err)
        }
    }, [dispatch])
    

    const handleMenuItemClick = (menuItemProps: MouseEvent & {defaultValue?: string}) => {
        if (menuItemProps.defaultValue) setMenuOption(menuItemProps.defaultValue)
    }

    const handleMenuChange = () => {
        setMenuValue(menuOption)
    }

    const handleLoadGraphClick = () => {
        const args = {
            graphName: menuOption
        }

        graphAPI.getGraph(args)
            .then(res => selfDataAdapter(res))
            .then(graphData => dispatch(setGraphData(graphData)))
    }
    
    return <div className="graph-menu">
        <Dropdown
            trigger={<input
                    className="dropdown-trigger"
                    value={menuOption}
                    onChange={handleMenuChange}
                    >
                </input>}
            menu={graphList.map((graphName: string) => <input
                defaultValue={graphName}
                onClick={handleMenuItemClick}
                readOnly></input>)
            }
        />
        <button onClick={handleLoadGraphClick}>Load</button>
        </div>
}

export default GraphLoad