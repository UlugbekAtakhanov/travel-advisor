import { createSlice } from '@reduxjs/toolkit'

const placesSlice = createSlice({
  name: 'places',
  initialState: {
    places: [],
    isLoading: false,
    placesError: ""
  },
  reducers: {
    getPlacesStart: (state) => {
      state.isLoading = true
    },
    getPlacesSuccess: (state, action) => {
      state.isLoading = false
      state.places = action.payload
    },
    getPlacesError: (state, action) => {
      state.isLoading = false
      state.placesError = action.payload
    }
  }
})

export const { getPlacesError, getPlacesStart, getPlacesSuccess } = placesSlice.actions
export default placesSlice.reducer



      //   img: "https://i.pinimg.com/564x/d2/6b/71/d26b71d4bcb1609f11d7c5f7440792f6.jpg",
      //   name: "Montreal Restaurant 1",
      //   price: 12,
      //   ranking: "#14 of 14,620 Restaurants in Berlin"
      // },
      // {
      //   img: "https://i.pinimg.com/564x/d2/6b/71/d26b71d4bcb1609f11d7c5f7440792f6.jpg",
      //   name: "Montreal Restaurant 1",
      //   price: 12,
      //   ranking: "#14 of 14,620 Restaurants in Berlin"
      // },
      // {
      //   img: "https://i.pinimg.com/564x/d2/6b/71/d26b71d4bcb1609f11d7c5f7440792f6.jpg",
      //   name: "Montreal Restaurant 1",
      //   price: 12,
      //   ranking: "#14 of 14,620 Restaurants in Berlin"
      // },
      // {
      //   img: "https://i.pinimg.com/564x/d2/6b/71/d26b71d4bcb1609f11d7c5f7440792f6.jpg",
      //   name: "Montreal Restaurant 1",
      //   price: 12,
      //   ranking: "#14 of 14,620 Restaurants in Berlin"
      // },
      // {
      //   img: "https://i.pinimg.com/564x/d2/6b/71/d26b71d4bcb1609f11d7c5f7440792f6.jpg",
      //   name: "Montreal Restaurant 1",
      //   price: 12,
      //   ranking: "#14 of 14,620 Restaurants in Berlin"
      // },
      // {
      //   img: "https://i.pinimg.com/564x/d2/6b/71/d26b71d4bcb1609f11d7c5f7440792f6.jpg",
      //   name: "Montreal Restaurant 1",
      //   price: 12,
      //   ranking: "#14 of 14,620 Restaurants in Berlin"
      // },
      // {
      //   img: "https://i.pinimg.com/564x/d2/6b/71/d26b71d4bcb1609f11d7c5f7440792f6.jpg",
      //   name: "Montreal Restaurant 1",
      //   price: 12,
      //   ranking: "#14 of 14,620 Restaurants in Berlin"
      // },