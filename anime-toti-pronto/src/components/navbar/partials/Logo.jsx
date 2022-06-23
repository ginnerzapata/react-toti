import React from 'react'
import { Link } from 'react-router-dom'

export const Logo = () => {
  return (
    <div className='logo'>
      <Link to="/">
        <span className="dark">Anime</span>
        <span className="orange">Toti</span>
      </Link>
      </div>
  )
}
