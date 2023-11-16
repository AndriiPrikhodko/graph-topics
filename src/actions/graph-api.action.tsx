// import { ThunkAction } from 'redux-thunk'
// import { graphAPI } from '../api/graph.api'
// import { AnyAction } from 'redux'
// // types
// const LOAD_GRAPH_LIST = 'LOAD_GRAPH_LIST'

// type RootState = {
//     graphList: string[]
// }

// // actions
// export const loadGraphList = (): ThunkAction<void, RootState, unknown, AnyAction> => async (dispatch) => {
//     const graphList = await graphAPI.getGraphList()
//     dispatch({
//         type: LOAD_GRAPH_LIST,
//         payload: graphList
//     })
// }

import { createAsyncThunk } from '@reduxjs/toolkit';
import { graphAPI } from '../api/graph.api'

export const loadGraphList = createAsyncThunk(
  'api/loadGraphList',
  async (_ ,{dispatch}) => {
    try {
      const graphList = await graphAPI.getGraphList()
      dispatch({
        type: 'fulfilled', 
        payload: graphList 
      })
    } catch (error) {
      dispatch({
        type: 'failed', 
        error: error,
     })
    }
  }
)

