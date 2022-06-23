import React from 'react'
import { Hero } from '../components/hero/Hero'
import { MostWatched } from '../components/mostWatched/MostWatched'
import { Search } from '../components/search/Search'

export const Main = () => {
  return (
      <>
      <Hero />
      <Search/>
      <MostWatched/>
      </>
  )
}
