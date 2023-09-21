import { ThunkAction } from 'redux-thunk'
import { graphAPI } from '../api/graph.api'
import { AnyAction } from 'redux'
// types
const LOAD_GRAPH_LIST = 'LOAD_GRAPH_LIST'

type RootState = {
    graphList: string[]
}

// actions
export const loadGraphList = (): ThunkAction<void, RootState, unknown, AnyAction> => async (dispatch) => {
    const graphList = await graphAPI.getGraphList()
    dispatch({
        type: LOAD_GRAPH_LIST,
        payload: graphList
    })
}