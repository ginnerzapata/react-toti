import React from 'react'
import { useParams } from 'react-router-dom'
import { UseFetch } from '../hooks/UseFetch'

export const AnimeDetails = () => {
  return (
      <div className='anime-details'>
          <img src="" alt="anime" className='anime-img'/>
          <div className='info'>
              <h2 className='title'>Naruto</h2>
              <p><strong>Genres:</strong> Romance, Aventura</p>
              <p><strong>Descripção:</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut semper sem. Integer iaculis tortor sed velit blandit tristique. Nam scelerisque nibh sit amet mattis pretium. Pellentesque erat orci, tempor vitae diam vel, lobortis mollis ante. Fusce condimentum eleifend ullamcorper. Aliquam egestas sollicitudin dictum. Quisque eget eleifend nisl. Praesent viverra felis ac est molestie, tempus bibendum nibh aliquam. In magna arcu, accumsan eu suscipit ut, aliquam vel metus. Etiam non lacus metus. Pellentesque nunc sapien, venenatis in lorem a, commodo consequat ipsum. Maecenas id neque ac arcu pulvinar viverra. Fusce a consectetur nibh. Praesent interdum libero in tempus interdum. Quisque ullamcorper mollis dui, nec pellentesque leo condimentum vitae.</p>
          </div>
    </div>
  )
}
