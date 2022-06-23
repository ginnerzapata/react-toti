import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { useUserContext } from '../context/useUserContext'

export const Register = () => {
  const navigate = useNavigate()
  const [form, setForm] = useState({
    nome:"", email:"", password:""
  })
  const [, setUser] = useUserContext()

  const handleForm = (nome, value) => {
    setForm({...form, [nome]: value})
  }

  return (
      <div className="register">
      <form onSubmit={e => {
        e.preventDefault()
        setUser(form)
        navigate("/")

          }}>
              <label htmlFor="nome">
                  Nome
                  <input value={form.nome} onChange={e => handleForm("nome", e.target.value)} type="text" name="nome" id="nome" />
              </label>
              <label htmlFor="email">
                  email
                <input value={form.email} onChange={e => handleForm("email", e.target.value)}  type="email" name="email" id="email" /></label>
              <label htmlFor="password">
                  password
                  <input value={form.password} onChange={e => handleForm("password", e.target.value)}  type="password" name="password" id="password" />
        </label>
          <input className='button primary' type="submit" value="Criar" />
          </form>
    </div>
  )
}
