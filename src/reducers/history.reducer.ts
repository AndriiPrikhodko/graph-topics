
import { createSlice } from '@reduxjs/toolkit'

interface History {
    history: {
        type: 'add' | 'delete'
        data: GraphData
    }[]
    pointer: number
}

const historySlice = createSlice({
    name: 'history',
    initialState: { history: [], pointer: -1 } as History,
    reducers: {
        addHistoryItem: (state, action) => {
            // If the latest state is not the last item in the history array,
            // remove the items after the pointer
            if (state.pointer !== state.history.length - 1) {
                state.history = state.history.slice(0, state.pointer + 1)
            }
            // Add the new item
            state.history.push(action.payload)
            // Update the pointer
            state.pointer++
            // Ensure the history array doesn't exceed 5 items
            if (state.history.length > 5) {
                state.history.shift()
                state.pointer--
            }
        },
        undo: state => {
            if (state.pointer > 0) {
                state.pointer--
            }
        },
        redo: state => {
            if (state.pointer < state.history.length - 1) {
                state.pointer++
            }
        },
        clearHistory: () => ({ history: [], pointer: -1 })
    }
})

export const { addHistoryItem, undo, redo, clearHistory } = historySlice.actions

export default historySlice.reducer