import React from 'react'
import naruto from "../../images/naruto.png"

export const Hero = () => {
  return (
    <div className='hero'>
        <div className='hero-text'>
            <h1 className='hero-title'>
                Compre Naruto  
              </h1>
              <p>
                  Um jovem ninja que constantemente procura por reconhecimento e sonha em se tornar Hokage, o ninja líder de sua vila.
              </p>
              <button className="button secondary mt-16">Saiba mais</button>
        </div>
        <img src={naruto} alt="naruto" />
    </div>
  )
}
