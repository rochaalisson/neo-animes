import React, { useState } from 'react'
import AnimeCard from '../AnimeCard'
import Spinner from '../Spinner'
import { useHomeFetch } from '../../hooks/useAnimesFetch'
import navigationButton from '../../assets/images/arrow-down.svg'
import { Title, Container, Wrapper, NavButton } from './styles'
import { Link } from 'react-router-dom'

export default function AnimeScroller({ sortBy }) {
   const scrollerTitle = (() => {
      switch (sortBy) {
         case 'popularityRank':
            return 'Popular Animes'
         case '-averageRating':
            return 'Best Rated'
         case '-startDate':
            return 'Latest'
         default:
            return `Animes "${sortBy}"`
      }
   })()
   const handleScrollerChange = (increment) => {
      setOffset(Math.max(0, offset + increment))
   }

   const sortQuery = `@${sortBy}`
   const { animes, loading } = useHomeFetch(sortQuery)
   const [offset, setOffset] = useState(0)

   return (
      <>
         {!loading ? (
            <div style={{ margin: '0 10px' }}>
               <Title>
                  <h2>{scrollerTitle}</h2>
                  <Link to={`/search?q=${sortQuery}`}>See all</Link>
               </Title>
               <hr />
               <Wrapper>
                  <Container off={offset} className={sortBy}>
                     {animes?.data?.map((anime, idx) => (
                        <AnimeCard key={`${sortBy}${idx}`} anime={anime} />
                     ))}
                  </Container>
                  {/* <NavigationButtons> */}
                  {offset != 0 ? (
                     <NavButton
                        className="left-button"
                        onClick={() => {
                           handleScrollerChange(-1)
                        }}
                     >
                        <img src={navigationButton} alt="prev" />
                     </NavButton>
                  ) : (
                     <div></div>
                  )}
                  <NavButton
                     onClick={() => {
                        handleScrollerChange(1)
                     }}
                  >
                     <img src={navigationButton} alt="prev" />
                  </NavButton>
                  {/* </NavigationButtons> */}
               </Wrapper>
            </div>
         ) : (
            <Spinner />
         )}
      </>
   )
}
