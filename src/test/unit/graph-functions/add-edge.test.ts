import { addEdge } from '../../../actions/functions/graph/add-edge';
import {default as testsData} 
    from '../../data/unit/graph-functions/add-edge.data.json'
import type { TestDataEdge } from '../../data/unit/graph-functions/data-types';

describe('check add edge function', () => {
    testsData.map((testData: TestDataEdge) => test(testData.name, () => {
        const {edge, graphData} = testData
        const [initGData, expectedGData] = graphData
        const actualGData = addEdge.call(edge, initGData)
        expect(expectedGData).toMatchObject(actualGData)
    }))
})

