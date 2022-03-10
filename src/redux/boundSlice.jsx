import { createSlice } from '@reduxjs/toolkit'

const boundSlice = createSlice({
  name: 'bounds',
  initialState: {
    bounds: {}
  },
  reducers: {
    getBounds: (state, action) => {
        state.bounds = action.payload
    }
  }
})

export const {getBounds} = boundSlice.actions
export default boundSlice.reducer