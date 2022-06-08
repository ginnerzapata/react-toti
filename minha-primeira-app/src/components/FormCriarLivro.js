import React, { useState } from 'react'
import uniqid from 'uniqid';

const FormCriarLivro = (props) => {
    const initialValues = {
        nome: "",
        autor: "",
        imgUrl:""
    }
    const [formValues, setFormValues] = useState(initialValues)

    const handleFormChange = (nome, valor) => {
        setFormValues({...formValues, [nome]: valor})
    }
  return (
      <div className='form'>
          <form onSubmit={e => {
              e.preventDefault()
              props.handleCreate({ id: uniqid(), ...formValues })
              setFormValues(initialValues)
          }}>
            <label>
                Nome:
                <input name="nome" value={formValues.nome} onChange={e => handleFormChange("nome", e.target.value)} type="text"/>  
            </label>
            <label>
                Autor:
                  <input name='autor' value={formValues.autor} onChange={e => handleFormChange("autor", e.target.value)}  type="text"/>  
            </label>
            <label>
                Url da capa:
                  <input name='imgUrl' value={formValues.imgUrl} onChange={e => handleFormChange("imgUrl", e.target.value)} type="text"/>  
              </label>
              <input type="submit"  value="Criar livro"/>
          </form>
    </div>
  )
}

export default FormCriarLivro
