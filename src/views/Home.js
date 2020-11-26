import React from 'react'
import AnimeScroller from '../components/AnimeScroller'
import AnimeSlider from '../components/AnimeSlider'

export default function Home() {
   return (
      <div style={{ width: '100%' }}>
         <AnimeSlider />
         <AnimeScroller sortBy="popularityRank" />
         <AnimeScroller sortBy="-averageRating" />
         <AnimeScroller sortBy="-startDate" />
      </div>
   )
}
