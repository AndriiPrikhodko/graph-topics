import { graphAPI } from "../../api/graph.api"
import { ImSpinner2 } from "react-icons/im"
import { ChangeEvent, useState } from "react"
import { useSelector, useDispatch } from 'react-redux'
import { loadGraphList } from "../../actions/graph-api.action";
import { cleanGraphData } from '../../reducers/graph.reducer';
import './GraphHeader.css'

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
    }

    const handleInputNameChange = (event: ChangeEvent) => {
        const target = event.target as HTMLInputElement
        setGraphName(target.value)
    }

    return (
        <div className="graph-header">
            <input 
                value={graphName} 
                onChange={handleInputNameChange} 
                id="save-filename-input"
                placeholder="enter graph name"
                data-testid='save-input'
                ></input>
                <button 
                    className="save unselectable" 
                    onClick={handleSaveGraphClick}
                    data-testid='save-button'>
                        Save
                </button>
            {(() => {
                if (graphLoading) {
                    return <ImSpinner2 className="loaderIcon" data-testid='save-spinner' />
                }
            })()}
                <button 
                    className="clean unselectable" 
                    onClick={handleCleanGraphClick}
                    data-testid='clear-button'>
                        Clear
                </button>
        </div>
    )
}

export default GraphHeader