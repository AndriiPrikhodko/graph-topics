import { addEdge } from '../../../actions/functions/graph/add-edge';
import * as addEdgeData from '../../data/unit/graph-functions/add-edge.data.json'

const testsData = addEdgeData.default

type TestData = {
    name: string,
    edge: string,
    graphData: IGraphData[]
}

describe('check add edge function', () => {
    testsData.map((testData: TestData) => test(testData.name, () => {
        const {edge, graphData} = testData
        const [initGData, expectedGData] = graphData
        const actualGData = addEdge.call(edge, initGData)
        expect(expectedGData).toMatchObject(actualGData)
    }))
})

