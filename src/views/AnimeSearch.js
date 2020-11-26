import React, { useEffect } from 'react'
import { useLocation } from 'react-router'
import { Link } from 'react-router-dom'
import AnimeCard from '../components/AnimeCard'
import Spinner from '../components/Spinner'
import { useHomeFetch } from '../hooks/useAnimesFetch'
import { Content } from '../styles'

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
                  {page != 0 ? (
                     <Link to={`/search?q=${searchTerm}&p=${changePage(-1)}`}>
                        <button>anterior</button>
                     </Link>
                  ) : null}
                  {page < animes.meta?.count / 20 - 1 ? (
                     <Link to={`/search?q=${searchTerm}&p=${changePage(1)}`}>
                        <button>proxima</button>
                     </Link>
                  ) : null}
                  <div style={{ width: '100%' }}>
                     <Content>
                        {animes.data.map((anime, idx) => {
                           return <AnimeCard key={idx} anime={anime} />
                        })}
                     </Content>
                  </div>
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
