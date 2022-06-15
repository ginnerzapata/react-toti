import React from 'react'

export const Searchbar = (props) => {
  return (
    <div className='searchbar' onSubmit={e => {
      e.preventDefault()
      props.setPokemonName(props.search)
      props.setFetched(false)
      props.setSearch("")
      }}>
          <form action="">
              <input value={props.search} onChange={e => props.setSearch(e.target.value)} type="text" placeholder='Escreve o nome do pokemon'/>
              <input type="submit" value="Search" />
         </form>
    </div>
  )
}
