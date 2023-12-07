import React, { useState, useEffect, MouseEvent } from 'react'
import { setGraphData } from '../../../../reducers/graph.reducer'
import { graphAPI } from '../../../../api/graph.api'
import {selfDataAdapter}
    from '../../../../helpers/data-adapter/self-data-adapter'
import Dropdown from './Dropdown'
import { useSelector, useDispatch } from 'react-redux'
import { loadGraphList } from '../../../../actions/graph-api.action'
import Button from '../../../shared/button'
import { setGraphDataLocal } from '../../../../helpers/local-storage'
import { clearHistory } from '../../../../reducers/history.reducer'

const GraphLoad: React.FC = () => {
    const dispatch = useDispatch()
    const graphList = useSelector((store: Store) => store.graphList)
    const [menuOption, setMenuOption] = useState<string>('')

    useEffect(() => {
        try {
            dispatch(loadGraphList())
        } catch (err) {
            console.error(err)
        }
    }, [dispatch])

    const handleMenuItemClick =
    (menuItemProps: MouseEvent & {defaultValue?: string}) => {
        if (menuItemProps.defaultValue)
            setMenuOption(menuItemProps.defaultValue)
    }

    const handleLoadGraphClick = () => {
        if (menuOption) {
            const args = {
                graphName: menuOption
            }

            graphAPI.getGraph(args)
                .then(res => selfDataAdapter(res))
                .then(graphData => {
                    setGraphDataLocal(graphData)
                    dispatch(setGraphData(graphData))
                }).catch(error =>
                    console.error(error))
                .finally(() =>
                    dispatch(clearHistory())
                )
        }
    }

    return <div className="graph-menu" data-testid='load-graph-list'>
        <Dropdown
            trigger={<input
                className="dropdown-trigger"
                value={menuOption}
                data-testid='load-dropdown'
            >
            </input>}
            menu={graphList.data.map((graphName: string) => <input
                className='dropdown-input'
                defaultValue={graphName}
                onClick={handleMenuItemClick}
                readOnly></input>)
            }
        />
        <Button
            label='Load'
            onClick={handleLoadGraphClick}
            testid='load-graph-button'
            className='menu-button-left'
        />
    </div>
}

export default GraphLoad