import { nodeIndex } from '../../../helpers/data-adapter/indexer'
import {default as testsData}
    from '../../data/unit/graph-functions/indexer.data.json'

describe('check remove edge function', () => {
    testsData.map(testData => test(testData.name, () => {
        const {pointer, graphData, expected} = testData
        const actualGData = nodeIndex(pointer, graphData.nodes)
        expect(expected).toMatchObject(actualGData)
    }))
})