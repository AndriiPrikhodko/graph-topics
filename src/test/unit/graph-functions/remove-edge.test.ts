import { removeEdge } from '../../../actions/functions/graph/remove-edge'
import {default as testsData} 
    from '../../data/unit/graph-functions/remove-edge.data.json'
    import type { TestDataEdge } from '../../data/unit/graph-functions/data-types'


describe('check remove edge function', () => {
    testsData.map((testData: TestDataEdge) => test(testData.name, () => {
        const {edge, graphData} = testData
        const [initGData, expectedGData] = graphData
        const actualGData = removeEdge.call(edge, initGData)
        expect(expectedGData).toMatchObject(actualGData)
    }))
})