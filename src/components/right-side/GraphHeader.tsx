import { graphAPI } from "../../api/graph.api"
import { ImSpinner2 } from "react-icons/im"
import { ChangeEvent, useState } from "react"
import { useSelector, useDispatch } from 'react-redux'
import { loadGraphList } from "../../actions/graph-api.action";
import { cleanGraphData } from '../../reducers/graph.reducer';
import Button from '../shared/button';
import './GraphHeader.css'
import { setGraphDataLocal } from '../../helpers/local-storage';
import ActionMenuHeader from './ActionMenuHeader'
import HistoryControls from './HistoryControls'

const GraphHeader: React.FC = () => {
    const [graphLoading, setGraphLoading] = useState<boolean>(false)
    const [graphName, setGraphName] = useState('')
    const graphData = useSelector((store: Store) => store.graphData)
    const dispatch = useDispatch()

    const handleSaveGraphClick = () => {
        if(graphName.trim().length > 0){
            setGraphLoading(true)
            const payload:IPostGraphPayload = {
                name: graphName.trim(),
                data: graphData
            }

            graphAPI
            .save(payload)
            .then(() => dispatch(loadGraphList()))
            .catch(err => console.error(err))
            // .then(() => setGraphName(''))
            .finally(() =>
                setGraphLoading(false)
            )
        }
        else
            console.log('Enter graph name to save')
    }

    const handleCleanGraphClick = () => {
        dispatch(cleanGraphData())
        setGraphDataLocal({
            nodes: [], 
            links: []
        })
    }

    const handleInputNameChange = (event: ChangeEvent) => {
        const target = event.target as HTMLInputElement
        setGraphName(target.value)
    }

    return (
        <div className="graph-header" data-testid='graph-view-header'>
            <HistoryControls />
            <input 
                value={graphName} 
                className='header-item'
                onChange={handleInputNameChange} 
                id="save-filename-input"
                placeholder="enter graph name"
                data-testid='save-input'
                ></input>
                <Button label='Save' onClick={handleSaveGraphClick} testid='save-button' />
            {(() => {
                if (graphLoading) {
                    return <ImSpinner2 className="loaderIcon" data-testid='save-spinner' />
                }
            })()}
            <ActionMenuHeader />
            <div className='right'>
                <Button label='Clear' onClick={handleCleanGraphClick} testid='clear-button' />
            </div>
        </div>
    )
}

export default GraphHeader