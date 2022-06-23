import React from 'react'
import { UseFetch } from '../../hooks/UseFetch'
import { Card } from '../card/Card'

export const MostWatched = () => {
  const {data, loading, error} = UseFetch(`https://api.jikan.moe/v4/top/anime?type=tv&filter=bypopularity`)
  if (!data && loading) return <p>Carregando...</p>
  if (!data || error) return <p>Teve um erro com sua pesquiça</p>

  return (
    <div className='most-watched'>
          <h2 className='title'>Os mais comprados</h2>
          <div className="row">
              {data.slice(0,4).map(anime => <Card key={anime.mal_id} anime={anime} />)}
          </div>
    </div>
  )
}
