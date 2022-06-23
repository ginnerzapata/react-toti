import React from 'react'
import { useNavigate } from 'react-router-dom'
import naruto from "../../images/naruto.png"

export const Hero = () => {
  const navigate =useNavigate()
  return (
    <div className='hero'>
        <div className='hero-text'>
            <h1 className='hero-title'>
                Compre Naruto  
              </h1>
              <p>
                  Um jovem ninja que constantemente procura por reconhecimento e sonha em se tornar Hokage, o ninja líder de sua vila.
              </p>
              <button onClick={() =>navigate("/search/naruto")} className="button secondary mt-16">Saiba mais</button>
        </div>
        <img src={naruto} alt="naruto" />
    </div>
  )
}
