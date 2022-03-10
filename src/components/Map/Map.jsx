import React, { useEffect, useState } from 'react'
import GoogleMapReact from 'google-map-react'
import { useDispatch, useSelector } from 'react-redux'
import { getCoordinates } from '../../redux/coordSlice'
import { getBounds } from '../../redux/boundSlice'
import { getChildClicked } from '../../redux/childClickedSlice'

const Map = () => {

  const dispatch = useDispatch()
  const { coordinates } = useSelector(state => state.coordinates)
  const { places } = useSelector(state => state.places)


  return (
    <div className='flex-[4] md:auto p-4 md:p-auto'>
      <GoogleMapReact
        // bootstrapURLKeys={{key: "AIzaSyBuZ24xaMJR00uKYmm55mlGJRITbzHaEKQ"}}
        bootstrapURLKeys={{ key: "AIzaSyCjx0VcQOSzfyAtO--jUTcRIHtwnjT76fQ" }}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        options={{ disableDefaultUI: true, zoomControl: true }}
        onChange={(e) => {
          dispatch(getCoordinates({ lat: e.center.lat, lng: e.center.lng }))
          dispatch(getBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw }))
        }}
        onChildClick={(child) => dispatch(getChildClicked(child))}

      >
        {places?.map((place, index) => (
          <div key={index} className='flex absolute  group border-red-500 border' lat={Number(place.latitude)} lng={Number(place.longitude)}>
            <div className='group border absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-2 flex w-20  group-hover:scale-100 transition-all flex-col' lat={41.00743969999999} lng={71.6710248}>
              <p className='text-slate-700 text-[12px] mb-3'>{place.name}</p>
              <img className=' w-full object-cover' src={place?.photo?.images?.original?.url} alt="" />
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 group-hover:text-white transition-all absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-0 group-hover:scale-150" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
          </div>
        ))}
      </GoogleMapReact>
    </div>
  )
}

export default Map