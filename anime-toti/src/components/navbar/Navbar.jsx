import React from 'react'
import { Actions } from './partials/Actions'
import { Logo } from './partials/Logo'

export const Navbar = () => {
  return (
    <div className='navbar'>
      <Logo />
      <p>Bem-vindo <strong>Daniel</strong></p>
      <Actions/>
    </div>
  )
}
