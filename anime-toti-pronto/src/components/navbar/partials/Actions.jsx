import React from 'react'
import { useNavigate } from 'react-router-dom'
import {  useUserContext } from '../../../context/useUserContext'

export const Actions = () => {
  const navigate = useNavigate()
  const [user,setUser ] = useUserContext()
  return (
      <div>
          {user?<button onClick={()=>setUser(null)} className='button secondary'>Log Out</button>:
          <button onClick={()=> navigate("/register")} className='button primary'>Register</button>}
      </div>
  )
}
