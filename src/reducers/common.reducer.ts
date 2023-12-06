import { createSlice } from '@reduxjs/toolkit'

const selectSlice = createSlice({
    name: 'select',
    initialState: {
        type: 'from',
        graphFunction: null,
        editMode: false
    },
    reducers: {
        setLinkType: (state, action) => {
            state.type = action.payload
        },
        setGraphFunction: (state, action) => {
            state.graphFunction = action.payload
        },
        setEditMode: (state, action) => {
            state.editMode = action.payload
        }
    },
})

export const { setLinkType, setGraphFunction, setEditMode } = selectSlice.actions

export default selectSlice.reducer