import React from 'react'
import { Actions } from './partials/Actions'
import { Logo } from './partials/Logo'
import { useUserContext } from '../../context/useUserContext'

export const Navbar = () => {
  const [user] = useUserContext()
  return (
    <div className='navbar'>
      <Logo />
      {user && <p>Bem-vindo <strong>{user.nome}</strong></p>}
      <Actions/>
    </div>
  )
}
