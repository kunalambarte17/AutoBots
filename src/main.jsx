import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Home'
import Contact from './Contact'
import { ClerkProvider } from '@clerk/clerk-react'
import Profile from './profile/Profile'
import AddLisiting from './add-Listings/AddLisiting'
import CarDetails from './profile/CarDetails'



const router = createBrowserRouter([
  {
    path:'/',
    element:<Home/>
  },
  {
    path:'/contact',
    element:<Contact/>
  },
  {
    path:'/profile',
    element:<Profile/>
  },
  {
    path:'/add-Listing',
    element:<AddLisiting/>
  },
  {
    path:'/listing/:id',
    element:<CarDetails/>
  }
])

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
    <RouterProvider router={router} />
    </ClerkProvider>
  </StrictMode>
)
