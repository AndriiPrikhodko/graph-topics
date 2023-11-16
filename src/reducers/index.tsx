// import graphReducer from './graph.reducer'
// import graphListReducer from './graph-list.reducer'
// import { combineReducers } from 'redux'

// const rootReducer = combineReducers({
//     graphData: graphReducer,
//     graphList: graphListReducer
// })

// export default rootReducer

import graphListSlice from './graph-list.reducer'
import graphSlice from './graph.reducer'

export default {
  graphListSlice,
  graphSlice
}