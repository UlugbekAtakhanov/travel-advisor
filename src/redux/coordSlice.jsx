import { createSlice } from '@reduxjs/toolkit'

const coordSlice = createSlice({
  name: 'coordinates',
  initialState: {
    coordinates: {}
  },
  reducers: {
    getCoordinates: (state, action) => {
        state.coordinates = action.payload
    }
  }
})

export const {getCoordinates} = coordSlice.actions
export default coordSlice.reducer