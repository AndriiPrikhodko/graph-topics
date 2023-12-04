import { addEdge } from '../../../actions/functions/graph/add-edge'
import {default as testsData}
    from '../../data/unit/graph-functions/add-edge.data.json'
import type { TestDataEdge } from '../../data/unit/graph-functions/data-types'
import {default as fromTestData}
    from '../../data/unit/graph-functions/link-from.data.json'
import {default as chainTestData}
    from '../../data/unit/graph-functions/link-chain.data.json'
import {default as mapTestData}
    from '../../data/unit/graph-functions/link-map.data.json'
import {default as intoTestData}
    from '../../data/unit/graph-functions/link-into.data.json'

describe('check add edge function from', () => {
    testsData.map((testData: TestDataEdge) => test(testData.name, () => {
        const {edge, graphData} = testData
        const [initGData, expectedGData] = graphData
        const actualGData = addEdge.call(edge, initGData)
        expect(expectedGData).toMatchObject(actualGData)
    }))

    fromTestData.map((testData: TestDataEdge) => test(testData.name, () => {
        const {edge, graphData} = testData
        const [initGData, expectedGData] = graphData
        const actualGData = addEdge.call(edge, initGData)
        expect(expectedGData).toMatchObject(actualGData)
    }))
})

describe('check add edge function chain', () => {
    testsData.map((testData: TestDataEdge) => test(testData.name, () => {
        const {edge, graphData} = testData
        const [initGData, expectedGData] = graphData
        const actualGData = addEdge.call(edge, initGData, 'chain')
        expect(expectedGData).toMatchObject(actualGData)
    }))

    mapTestData.map((testData: TestDataEdge) => test(testData.name, () => {
        const {edge, graphData} = testData
        const [initGData, expectedGData] = graphData
        const actualGData = addEdge.call(edge, initGData, 'bijection')
        expect(expectedGData).toMatchObject(actualGData)
    }))
})

describe('check add edge function bijection', () => {
    testsData.map((testData: TestDataEdge) => test(testData.name, () => {
        const {edge, graphData} = testData
        const [initGData, expectedGData] = graphData
        const actualGData = addEdge.call(edge, initGData, 'bijection')
        expect(expectedGData).toMatchObject(actualGData)
    }))

    chainTestData.map((testData: TestDataEdge) => test(testData.name, () => {
        const {edge, graphData} = testData
        const [initGData, expectedGData] = graphData
        const actualGData = addEdge.call(edge, initGData, 'chain')
        expect(expectedGData).toMatchObject(actualGData)
    }))
})

describe('check add edge function into', () => {
    testsData.map((testData: TestDataEdge) => test(testData.name, () => {
        const {edge, graphData} = testData
        const [initGData, expectedGData] = graphData
        const actualGData = addEdge.call(edge, initGData, 'into')
        expect(expectedGData).toMatchObject(actualGData)
    }))

    intoTestData.map((testData: TestDataEdge) => test(testData.name, () => {
        const {edge, graphData} = testData
        const [initGData, expectedGData] = graphData
        const actualGData = addEdge.call(edge, initGData, 'into')
        expect(expectedGData).toMatchObject(actualGData)
    }))
})

