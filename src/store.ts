import { configureStore } from '@reduxjs/toolkit'
import rootReducer from './reducers'
import thunk from 'redux-thunk'

const store = configureStore({
  reducer: {
    graphData: rootReducer.graphSlice,
    graphList: rootReducer.graphListSlice
  },
  middleware: [thunk],
})

export default store;