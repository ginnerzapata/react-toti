import React from 'react'

export const Card = () => {
    
  return (
      <div className='card'  style={{backgroundImage: `linear-gradient(0deg, rgba(39, 11, 75, 0.72), rgba(39, 11, 75, 0.2)),url()`, backgroundSize: "cover"}}>
          <p className="movieTitle">Naruto</p>
          <p>Romance, Aventura</p>
          <button className="button primary mt-16">Saiba mais</button>
    </div>
  )
}
