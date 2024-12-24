import { SignInButton } from '@clerk/clerk-react'
import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Category from './components/Category'
import Recents from './components/Recents'
import RecentSearched from './components/RecentSearched'
import Section from './components/Section'
import Footer from './components/Footer'


function Home() {
  return (
    <div>
      {/* Header */}
      <Header/>
      {/* Hero */}
      <Hero/>
      {/* Category */}
      <Category/>
      {/* More Used */}
      <Recents/>
      {/* Recent Search */}
      <RecentSearched/>
      {/* Other Section */}
      <Section/>
      {/* Footer */}
      <Footer/>

    </div>
  )
}

export default Home
