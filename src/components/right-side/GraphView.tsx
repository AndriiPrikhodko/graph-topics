import Graph from "./graph-engine/graph"
import GraphHeader from "./GraphHeader"
import './GraphView.css'

const GraphView: React.FC = () => {
    return (
        <div className="graph-view split-large right" id="graph" data-testid='right-view'>
            <GraphHeader />
            <Graph />
        </div>
    )
}

export default GraphView