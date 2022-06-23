import React from 'react'
import { useParams } from 'react-router-dom'
import { UseFetch } from '../hooks/UseFetch'

export const AnimeDetails = () => {
    const { animeId } = useParams()
    const { loading, error, data } = UseFetch(`https://api.jikan.moe/v4/anime/${animeId}`)
    if (!data && loading) return <p>Carregando...</p>
    if (!data || error) return <p>Teve um erro com sua pesquiça</p>
  return (
      <div className='anime-details'>
          <img src={data.images.jpg.image_url} alt="anime" className='anime-img'/>
          <div className='info'>
              <h2 className='title'>{data.title}</h2>
              <p><strong>Genres:</strong> {data.genres.map(genre => genre.name).join(", ")}</p>
              <p><strong>Descripção:</strong> {data.synopsis}</p>
          </div>
    </div>
  )
}
