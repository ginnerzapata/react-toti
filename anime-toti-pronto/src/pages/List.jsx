import React from 'react'
import { useParams } from 'react-router-dom'
import { Card } from '../components/card/Card'
import { UseFetch } from '../hooks/UseFetch'

export const List = () => {
    const { term } = useParams()
    const { data, loading, error } = UseFetch(`https://api.jikan.moe/v4/anime?q=${term}&sfw`)
    if (!data && loading) return <p>Carregando...</p>
    if (!data || error) return <p>Teve um erro com sua pesquiça</p>
    
    return (
        <div className='most-watched'>
            <h2 className='title'>Resultados:</h2>
            <div className="row">
                {data.map(anime => <Card key={anime.mal_id} anime={anime} />)}
            </div>
        </div>
  )
}
