// import React from 'react'
import Background from '../assets/car.jpg'

function Home() {
  return (
    <div 
      style={{ backgroundImage: `url(${ Background })`}} 
      className='flex flex-row justify-center mx-auto bg-cover bg-fixed'
      >
        <div className='flex place-items-center h-screen'>
          <h3 className='p-10 bg-stone-600 bg-opacity-90 text-white rounded mb-11'>Welcome to the Garage</h3>
        </div>
    </div>
  )
}

export default Home