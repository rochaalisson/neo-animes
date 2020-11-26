import { useState, useEffect } from 'react'
import { INITIAL_FETCH_STATE as initialState } from '../helpers/Constants'

import API from '../service/API'

export const useHomeFetch = (searchTerm = '', currentPage = 0) => {
   const [error, setError] = useState('')
   const [loading, setLoading] = useState(true)
   const [animes, setAnimes] = useState(initialState)
   const [page, setPage] = useState(currentPage)

   const fetchAnimes = async () => {
      try {
         setError(false)
         setLoading(true)

         const animesAPI = await API.fetchAnimes(searchTerm, page)

         setAnimes(() => ({
            ...animesAPI,
         }))
      } catch (error) {
         setError(true)
         console.log(error)
      }
      setLoading(false)
   }
   useEffect(() => {
      fetchAnimes()
   }, [searchTerm, page])

   return { animes, loading, page, setPage, error }
}
