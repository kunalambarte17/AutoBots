import Header from '@/components/Header'
import React from 'react'
import { Link } from 'react-router-dom'

function Profile() {
  return (
    <div>
      <Header/>
      <div className='mt-4'>
        <div className='d-flex justify-content-around align-items-center gap-9'>
            <h2 className='fs-2 fw-bold'>My Listing</h2>
            <Link to={'/add-Listing'}>
            <button className='btn btn-primary'>+ Add New Listings</button>
            </Link>
        </div>
      </div>
    </div>
  )
}

export default Profile
