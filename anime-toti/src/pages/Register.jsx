import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { useUserContext } from '../context/useUserContext'

export const Register = () => {

  return (
    <div className="register">
      <form>
        <label htmlFor="nome">
          Nome
          <input  type="text" name="nome" id="nome" />
        </label>
        <label htmlFor="email">
          email
          <input type="email" name="email" id="email" /></label>
        <label htmlFor="password">
          password
          <input  type="password" name="password" id="password" />
        </label>
        <input className='button primary' type="submit" value="Criar" />
      </form>
    </div>
  )
}
