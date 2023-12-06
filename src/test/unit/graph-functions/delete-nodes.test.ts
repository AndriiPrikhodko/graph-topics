import { deleteNode } from '../../../actions/functions/graph/delete-node'
import {default as testsData}
    from '../../data/unit/graph-functions/delete-node.data.json'
import type { TestDataNode } from '../../data/unit/graph-functions/data-types'

describe('check delete node function', () => {
    testsData.map((testData: TestDataNode) => test(testData.name, () => {
        const {node, graphData} = testData
        const [initGData, expectedGData] = graphData
        const {graphData: actualGData} = deleteNode.call(node, initGData)
        expect(expectedGData).toMatchObject(actualGData)
    }))
})