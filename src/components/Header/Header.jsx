import React, { useState } from 'react'
import { Autocomplete } from "@react-google-maps/api"
import { useDispatch } from 'react-redux'
import { getCoordinates } from '../../redux/coordSlice'


const Header = () => {
  const dispatch = useDispatch()
  const [autocomplete, setAutocomplete] = useState(null)

  const onLoad = (autoCom) => setAutocomplete(autoCom)

  const onPlaceChanged = () => {
    const lat = autocomplete.getPlace().geometry.location.lat()
    const lng = autocomplete.getPlace().geometry.location.lng()
    dispatch(getCoordinates({ lat, lng }))
  }

  return (
    <div className=' bg-indigo-500 flex justify-between sm:items-center p-4 '>
      <p className='text-xl text-white tracking-wider'>Travel Advisor</p>
      <div className='sm:flex items-center gap-4'>
        <p className='text-white text-sm sm:text-md'>Explore new places</p>

        <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
          <div className='flex items-center bg-indigo-400 px-2 py-1 rounded gap-2 text-gray-100 text-sm'>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input className='bg-transparent outline-none' type="text" name="search" id="search" />
          </div>
        </Autocomplete>

      </div>
    </div>
  )
}

export default Header