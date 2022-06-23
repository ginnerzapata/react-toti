import React from 'react'
import { useNavigate } from 'react-router-dom'

export const Card = ({anime}) => {
    const navigate = useNavigate()
    
  return (
      <div className='card'  style={{backgroundImage: `linear-gradient(0deg, rgba(39, 11, 75, 0.72), rgba(39, 11, 75, 0.2)),url(${anime.images.jpg.image_url})`, backgroundSize: "cover"}}>
          <p className="movieTitle">{anime.title}</p>
          <p>{anime.genres.map(genre => genre.name).join(", ")}</p>
          <button onClick={() =>navigate(`/anime/${anime.mal_id}`)} className="button primary mt-16">Saiba mais</button>
    </div>
  )
}
