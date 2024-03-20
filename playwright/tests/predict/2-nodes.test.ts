import {default as testData} 
    from '../../data/generated/graph-2-nodes.ts.json' assert { type: 'json' }
import predictor from './predictor-test'

testData.map(data => predictor(data))
