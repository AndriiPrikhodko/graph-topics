
import { createSlice } from '@reduxjs/toolkit'
const STORED_ITEMS = 8
interface History {
    data: HistoryItem[]
    pointer: number
    latest: boolean
}

const historySlice = createSlice({
    name: 'history',
    initialState: {
        data: [],
        pointer: -1,
        latest: true
    } as History,
    reducers: {
        addHistoryItem: (state, action) => {
            // If the latest state is not the last item in the history array,
            // remove the items after the pointer
            if (state.pointer !== state.data.length - 1) {
                state.data = state.data.slice(0, state.pointer + 1)
            }
            // Add the new item
            state.data.push(action.payload)
            // Update the pointer
            state.pointer++
            // Ensure the history array doesn't exceed 5 items
            if (state.data.length > STORED_ITEMS) {
                state.data.shift()
                state.pointer--
            }
            // Update the latest property
            state.latest = true
        },
        undo: state => {
            if (state.pointer > 0) {
                state.pointer--
                state.latest = false
            }
        },
        redo: state => {
            if (state.pointer < state.data.length - 1) {
                state.pointer++
                state.latest = state.pointer === state.data.length - 1
            }
        },
        clearHistory: () => ({ data: [], pointer: -1, latest: true })
    }
})

export const { addHistoryItem, undo, redo, clearHistory } = historySlice.actions

export default historySlice.reducer