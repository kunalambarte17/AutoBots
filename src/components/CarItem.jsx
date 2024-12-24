import React from 'react'
import "./CarItem.css"

  

function CarItem(car) {
  return (
    <div>
      <img src={car?.image} width={300} height={250}/>
      <div className='boxes'>
        <h2 className='name'>{car?.name}</h2>
      </div>
    </div>
  )
}

export default CarItem
