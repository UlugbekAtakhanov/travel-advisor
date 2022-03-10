import React, { } from 'react'
import { useDispatch } from 'react-redux'
import { getFilterType } from '../../redux/typeSlice'
import PlaceDetails from '../PlaceDetails/PlaceDetails'

const List = () => {
  const dispatch = useDispatch()

  return (
    <div className='flex-[2] p-4 flex flex-col h-screen md:h-auto'>
      <div>
        <p className='text-2xl text-slate-700'>Restaurants, Hotels & Attractions around you</p>
        <select onChange={(e) => dispatch(getFilterType(e.target.value))} name="type" className='outline-none border-b text-sm text-slate-700 mt-2'>
          <option value="restaurants">Restaurants</option>
          <option value="hotels">Hotels</option>
          <option value="attractions">Attractions</option>
        </select>
        <select name="type" className='outline-none border-b text-sm text-slate-700 mt-2 ml-8 '>
          <option value={0}>Rating(all)</option>
          <option value={3}>3.0</option>
          <option value={4}>4.0</option>
          <option value={4.5}>4.5</option>
        </select>
      </div>

      <div className='overflow-y-scroll mt-4 border flex-1'>
        <PlaceDetails />
      </div>
    </div>
  )
}

export default List