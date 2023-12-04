import { addEdge } from '../../../actions/functions/graph/add-edge';
import {default as testsData} 
    from '../../data/unit/graph-functions/add-edge.data.json'
import type { TestDataEdge } from '../../data/unit/graph-functions/data-types';

describe('check add edge function from', () => {
    testsData.map((testData: TestDataEdge) => test(testData.name, () => {
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
})

describe('check add edge function bijection', () => {
    testsData.map((testData: TestDataEdge) => test(testData.name, () => {
        const {edge, graphData} = testData
        const [initGData, expectedGData] = graphData
        const actualGData = addEdge.call(edge, initGData, 'bijection')
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
})

