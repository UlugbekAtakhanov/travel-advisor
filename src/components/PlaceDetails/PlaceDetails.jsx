import React, { useEffect, useRef, createRef } from 'react'
import { useSelector } from 'react-redux'

const PlaceDetails = () => {

  const { child } = useSelector(state => state.child)
  const { placesError, places } = useSelector(state => state.places)

  const myRef = useRef([])

  useEffect(() => {
    myRef.current = myRef.current.slice(0, places.length);
  }, [places])



  // if (!placesError) {
  //   return (
  //     <p>{placesError.message}</p>
  //   )
  // }


  useEffect(() => {
    myRef?.current[child]?.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
    });
  }, [child])

  // console.log(myRef.current[child])



  return (
    <>
      {places.length > 0 && places.map((item, index) => {
        return (
          // <div key={index} ref={myRef?.current[index]} className='m-2 rounded overflow-hidden border shadow-md'>
          <div key={index} ref={el => myRef.current[index] = el} className='m-2 rounded overflow-hidden border shadow-md'>
            <img className='aspect-[3/2] w-full h-full object-cover' src={item?.photo?.images?.original?.url} alt="error occured" />
            <div className='p-2'>
              <p className='text-slate-700 text-xl mb-3'>{item.name}</p>
              <p className='text-xs flex justify-between text-slate-700 capitalize'>
                <span>price</span>
                <span>${item.price}</span>
              </p>
              <p className='text-xs flex justify-between text-slate-700 capitalize'>
                <span>ranking</span>
                <span>{item.ranking}</span>
              </p>
              <div className='flex gap-3'>
                <button onClick={() => window.open("https://www.youtube.com/", "_blank")} className="uppercase text-[10px] font-bold text-gray-500 mt-4">youtube</button>
                <button onClick={() => window.open("https://www.youtube.com/", "_blank")} className="uppercase text-[10px] font-bold text-gray-500 mt-4">website</button>
              </div>
            </div>
          </div>
        )
      })}
    </>
  )
}

export default PlaceDetails 