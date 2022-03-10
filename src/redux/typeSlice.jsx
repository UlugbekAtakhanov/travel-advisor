import { createSlice } from '@reduxjs/toolkit'

const typeSlice = createSlice({
    name: 'filterType',
    initialState: {
        filterType: "restaurants"
    },
    reducers: {
        getFilterType: (state, action) => {
            console.log(action)
            state.filterType = action.payload
        }
    }
})

export const { getFilterType } = typeSlice.actions
export default typeSlice.reducer