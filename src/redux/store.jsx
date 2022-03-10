import { configureStore } from '@reduxjs/toolkit'

import coordReducer from "./coordSlice"
import boundReducer from "./boundSlice"
import placesReducer from "./placesSlice"
import childReducer from "./childClickedSlice"
import typeReducer from "./typeSlice"

export default configureStore({
  reducer: {
    coordinates: coordReducer,
    bounds: boundReducer,
    places: placesReducer,
    child: childReducer,
    filterType: typeReducer,
  },
})