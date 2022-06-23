import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'

export const Search = () => {
    const [search, setSearch] = useState("")
    const navigate = useNavigate()
  return (
      <div className='search'>
          <input value={search} onChange={e => setSearch(e.target.value)} type="text" />
          <button onClick={()=> navigate(`/search/${search.toLocaleLowerCase()}`)} className='button primary'>Pesquisar</button>
    </div>
  )
}
