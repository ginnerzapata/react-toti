import React from 'react'
import { Card } from '../components/card/Card'

export const List = () => {
    
    return (
        <div className='most-watched'>
            <h2 className='title'>Resultados:</h2>
            <div className="row">
               <Card/>
               <Card/>
               <Card/>
               <Card/>
            </div>
        </div>
  )
}
