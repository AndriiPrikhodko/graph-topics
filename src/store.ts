import { configureStore } from '@reduxjs/toolkit'
import rootReducer from './reducers'
import thunk from 'redux-thunk'

const store = configureStore({
  reducer: {
    graphData: rootReducer.graphSlice,
    graphList: rootReducer.graphListSlice,
    linkType: rootReducer.linkSlice
  },
  middleware: [thunk],
  devTools: true
})

export default store;