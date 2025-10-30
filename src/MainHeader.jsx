import React from 'react'
import { Link } from 'react-router-dom'

const MainHeader = () => {
  return (
    
      <header className='w-full flex justify-center p-4 bg-gray-800 border-b-gray-50'>
        <div className='container flex items-center justify-between'>
        <h1>logo</h1>
        <nav className='flex gap-4'>
            <Link to='/' >Home</Link>
            <Link to='/about' >About</Link>
            <Link to='/login' >Login</Link>
            <Link to='/air' >Air</Link>
        </nav>
        </div>
      </header>
    
  )
}

export default MainHeader
