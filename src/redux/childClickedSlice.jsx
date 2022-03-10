import { createSlice } from '@reduxjs/toolkit'

const childClicked = createSlice({
  name: 'child',
  initialState: {
    child: ""
  },
  reducers: {
    getChildClicked: (state, action) => {
      state.child = action.payload
    }
  }
})

export const { getChildClicked } = childClicked.actions
export default childClicked.reducer