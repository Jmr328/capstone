import { useState } from 'react'
import { Link } from 'react-router-dom'
// import Button from './Button'
import { signInWithPopup, signOut } from 'firebase/auth' 
import { auth, Providers } from '../config/firebase'

function navbar() {
  const [isVisible, setIsVisible] = useState(false)

  const signOutOnClick = () => {
    signOut(auth)
    localStorage.removeItem("isSignedIn")
    location.reload();
  }

  const signInOnClick = async () => {
    const response = await signInWithPopup(auth, Providers.google)
    if ( response.user ) {
        localStorage.setItem( "isSignedIn", "true")
        location.reload();
    }
  }

  const dropDown = () => {
    setIsVisible(!isVisible)
  }

  const clicked = () => {
    setIsVisible(false)
  }

  return (
    <nav className='flex item-center justify-between flex-wrap bg-stone-500 p-6 fixed w-full'>
        <div className='flex items-center flex-shrink-0 text-white shadow-md bg-stone-600 hover:bg-white hover:text-sky-600 rounded-xl p-2 mr-6'>
            <Link to='/' className='font-semibold text-lg tracking-tight'>The Garage</Link>
        </div>
        <div className='block'>
            <button
                onClick={dropDown} 
                className="flex items-center px-3 py-2 text-white
                border rounded border-stone-950 hover:text-sky-600 hover:border-white"
                >
                    <i className='fas fa-bars'></i>
            </button>
        </div>
        { isVisible ? (
            <div className='w-full rounded flex-grow items-center'>
                <div className="text-md lg:flex-grow">
                    <button className='p-3 m-5 bg-stone-600 justify-center rounded-xl hover:bg-sky-600 hover:shadow-lg'>
                        <div>
                            <Link to='/' onClick={ clicked } className='flex place-items-center mt-4 lg:inline-block lg:mt-0 
                            text-white mr-4 font-semibold'>
                                Home
                            </Link>
                        </div>
                    </button>
                    <button className='p-3 m-5 bg-stone-600 justify-center rounded-xl hover:bg-sky-600 hover:shadow-lg'>
                        <div>
                            <Link to='/about' onClick={ clicked } className='flex place-items-center mt-4 lg:inline-block lg:mt-0
                            text-white mr-4 font-semibold'>
                                About
                            </Link>
                        </div>
                    </button>
                    <button className='p-3 m-5 bg-stone-600 justify-center rounded-xl hover:bg-sky-600 hover:shadow-lg '>
                        <div>
                            <Link to='/dashboard' onClick={ clicked } className='flex place-items-center mt-4 lg:inline-block lg:mt-0
                            text-white mr-4 font-semibold'>
                                Dashboard
                            </Link>
                        </div>
                    </button>
                    <button className='p-3 m-5 bg-stone-600 justify-center rounded-xl hover:bg-sky-600 hover:shadow-lg'>
                        <div>
                            <Link to='/contact' onClick={ clicked } className='flex place-items-center mt-4 lg:inline-block lg:mt-0 
                            text-white mr-4 font-semibold'>
                                Contact
                            </Link>
                        </div>
                    </button>
                    {
                        !auth.currentUser ? 

                        <button className='p-3 m-5 bg-stone-600 justify-center rounded-xl hover:bg-sky-600 hover:shadow-lg font-semibold'>
                            <div>
                                <Link to="/" onClick={ () => { signInOnClick() }} className='flex place-items-center mt-4 lg:inline-block lg:mt-0 text-white'>
                                    Login
                                </Link>
                            </div>
                        </button>
                        :
                        <button className='p-3 m-5 bg-stone-600 justify-center rounded-xl hover:bg-sky-600 hover:shadow-lg font-semibold'>
                            <div>
                                <Link to="/" onClick={ () => { signOutOnClick() }} className='flex place-items-center mt-4 lg:inline-block lg:mt-0 text-white'>
                                    Sign Out
                                </Link>
                            </div>
                        </button>
                    }
                </div>
            </div>
        ) : (
            <></>
        )}
    </nav>
  )
}

export default navbar