import { useState, useEffect } from 'react'
import { INITIAL_FETCH_STATE as initialState } from '../helpers/Constants'

import API from '../service/API'

export const useListFetch = (listType, ids = '', currentPage = 0) => {
   const [error, setError] = useState('')
   const [loading, setLoading] = useState(true)
   const [animes, setAnimes] = useState(initialState)
   const [page, setPage] = useState(currentPage)

   const fetchAnimes = async () => {
      try {
         setError(false)
         setLoading(true)

         const animesAPI = await API.fetchList(ids, page)
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
   }, [ids, page])

   return { animes, loading, page, setPage, error }
}
