import { createAsyncThunk } from '@reduxjs/toolkit';
import { graphAPI } from '../api/graph.api'

export const loadGraphList = createAsyncThunk(
  'api/loadGraphList',
  async (_ ,{dispatch}) => {
    try {
      const graphList = await graphAPI.getGraphList()
      dispatch({
        type: 'fulfilled', 
      })
      return graphList
    } catch (error) {
      dispatch({
        type: 'failed', 
     })
     return error
    }
  }
)

