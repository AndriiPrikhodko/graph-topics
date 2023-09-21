import graphReducer from './graph.reducer'
import graphListReducer from './graph-list.reducer'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    graphData: graphReducer,
    graphList: graphListReducer
})

export default rootReducer