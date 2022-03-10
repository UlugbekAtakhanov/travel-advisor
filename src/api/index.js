import axios from "axios"
import { getPlacesError, getPlacesStart, getPlacesSuccess } from "../redux/placesSlice"


export const getPlacesData = async (bounds, dispatch, type) => {
  const url = `https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`
  const { ne, sw } = bounds

  dispatch(getPlacesStart())
  try {
    const { data: { data } } = await axios.get(url, {
      params: {
        bl_latitude: sw.lat,
        tr_latitude: ne.lat,
        bl_longitude: sw.lng,
        tr_longitude: ne.lng,
        limit: '10',
      },
      // headers: {
      //   'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
      //   'x-rapidapi-key': '7bae346852msh7df9c0722b6b999p1db8d1jsn9f6bab6d5faf'
      // }
      headers: {
        'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
        'x-rapidapi-key': 'e126fa9e3amsh2aac4fe49c1e975p16f77cjsnd898d2934198'
        // 'x-rapidapi-key': 'KJwZZIJSFimshuivMSVGaiYzkRomp15f2vKjsnK4bKzuUzVLzA'
      }
    })
    dispatch(getPlacesSuccess(data?.filter(place => place.name && place.num_reviews > 0)))

  } catch (error) {
    console.log(error.response)
    // dispatch(getPlacesError(error.response.data))
  }
}



