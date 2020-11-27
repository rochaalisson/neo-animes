import React, { useEffect } from 'react'
import { useLocation } from 'react-router'
import { Link } from 'react-router-dom'
import AnimeCard from '../components/AnimeCard'
import Spinner from '../components/Spinner'
import { useHomeFetch } from '../hooks/useAnimesFetch'
import styled from 'styled-components'

export default function AnimeSearch() {
   const query = new URLSearchParams(useLocation().search)
   const searchTerm = query.get('q') || '@'
   const currentPage = parseInt(query.get('p')) || 0
   const { animes, loading, page, setPage } = useHomeFetch(
      searchTerm,
      currentPage
   )

   useEffect(() => {
      setPage(currentPage)
   })

   const changePage = (factor) => {
      return page + factor
   }

   return (
      <>
         <h2>Search results for {`"${searchTerm}"`}</h2>
         {!loading ? (
            animes.data[0] ? (
               <>
                  <div style={{ width: '100%' }}>
                     <Content>
                        {animes.data.map((anime, idx) => {
                           return <AnimeCard key={idx} anime={anime} />
                        })}
                     </Content>
                  </div>
                  <PagingButtons>
                     {page != 0 ? (
                        <Link
                           to={`/search?q=${searchTerm}&p=${changePage(-1)}`}
                        >
                           <button>PREVIOUS</button>
                        </Link>
                     ) : (
                        <div></div>
                     )}
                     <p>Page {page}</p>
                     {page < animes.meta?.count / 20 - 1 ? (
                        <Link to={`/search?q=${searchTerm}&p=${changePage(1)}`}>
                           <button>NEXT</button>
                        </Link>
                     ) : (
                        <div></div>
                     )}
                  </PagingButtons>
               </>
            ) : (
               <h2>Not found</h2>
            )
         ) : (
            <Spinner />
         )}
      </>
   )
}

const PagingButtons = styled.div`
   width: 50%;
   margin: 0 auto;
   display: flex;
   align-items: center;
   justify-content: space-evenly;
   button {
      cursor: pointer;
      border: none;
      color: var(--lightGrey);
      font-size: 1rem;
      background: var(--medGrey);
      padding: 5px;
      border-radius: 5px;
   }
   p {
      font-size: 1.2rem;
      margin: 0;
   }
`

const Content = styled.div`
   --itemWidth: 180px;
   display: grid;
   grid-template-columns: repeat(auto-fill, minmax(var(--itemWidth), 1fr));
   grid-gap: 5px;
   max-width: var(--maxWidth);
   margin: 0 auto;
   @media (max-width: 370px) {
      --itemWidth: 130px;
   }
   @media (min-width: 1920px) {
      --itemWidth: 250px;
   }
`
