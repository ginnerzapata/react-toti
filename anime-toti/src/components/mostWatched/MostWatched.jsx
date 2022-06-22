import React from 'react'
import { Card } from '../card/Card'

export const MostWatched = () => {
  return (
    <div className='most-watched'>
          <h2 className='title'>Os mais comprados</h2>
          <div className="row">
              <Card/>
              <Card/>
              <Card/>
              <Card/>
          </div>
    </div>
  )
}
