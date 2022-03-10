import React, { useEffect, useState } from 'react'

import { useDispatch, useSelector } from "react-redux"
import { getCoordinates } from './redux/coordSlice'

import Header from './components/Header/Header'
import Map from './components/Map/Map'

import { getPlacesData } from "./api/index"
import List from './components/List/List'

const App = () => {

  const dispatch = useDispatch()
  const { coordinates } = useSelector(state => state.coordinates)
  const { bounds } = useSelector(state => state.bounds)
  const { filterType } = useSelector(state => state.filterType)



  useEffect(() => {
    navigator.geolocation.getCurrentPosition((data) => {
      const lat = data.coords.latitude
      const lng = data.coords.longitude
      dispatch(getCoordinates({ lat, lng }))
    })
  }, [dispatch])

  useEffect(() => {
    if (bounds.sw && bounds.ne) {
      getPlacesData(bounds, dispatch, filterType)
    }
  }, [bounds, dispatch, filterType])


  return (
    <div className='md:grid grid-rows-10 md:h-screen'>
      <Header />
      <div className='md:flex row-start-2 row-end-[11]'>
        <List />
        <Map />
      </div>
    </div>
  )
}

export default App