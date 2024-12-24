import React from 'react'
import "./Hero.css"
import Search from './Search'


function Hero() {
  return (
    <div>
      <div className='container1'>
        <h2 className='text-lg head1'>Find cars for sale and for rent near you</h2>
        <h2 className='text-[60px] head2'>Find Your Dream Car</h2>

        <Search/>
        <img src="/porsche.png" width={1200} className='car' />
      </div>
    </div>
  )
}

export default Hero
