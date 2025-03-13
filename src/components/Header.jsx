import React from 'react'
import "./Header.css"
import { UserButton, useUser } from '@clerk/clerk-react';
import { Button } from './ui/button';
import { Link } from 'react-router-dom';

const Header = () => {
  const {user, isSignedIn} = useUser(); //it is provided by clerk
  return (
    <div className='navbar shadow-sm bg-body-tertiary rounded'>
      <Link to={'/'}><img src="/Autobots.png" width={160} height={120} /></Link>

      <ul className='list hidden md:flex '>
        <Link to={'/'}>
          <li className='list-element'>Home</li>
        </Link>
        <li className='list-element'>Search</li>
        <li className='list-element'>New</li>
        <li className='list-element'>Preowned</li>
      </ul>

      {isSignedIn?
        <div className='signIn'>
          <UserButton/>
          <Link to={'/profile'}>
          <Button>Submit Listing</Button>
          </Link>
          
        </div>
        :
        <Link to={'/profile'}>
        <Button>Submit Listing</Button>
        </Link>
      }
    </div>
  )
}

export default Header
