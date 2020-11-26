import { useState, useEffect } from 'react'

import { INITIAL_FETCH_STATE as initialState } from '../helpers/Constants'
import API from '../service/API'

export const useSingleFetch = (animeId) => {
   const [error, setError] = useState('')
   const [loading, setLoading] = useState(true)
   const [anime, setAnime] = useState(initialState.data[0])

   const fetchAnime = async () => {
      try {
         setError(false)
         setLoading(true)

         const animesAPI = await API.fetchAnime(animeId)
         const categories = await API.fetchCategories(animeId)
         setAnime(() => ({
            ...animesAPI.data,
            attributes: {
               ...animesAPI.data.attributes,
               categories: categories.data.map(
                  (category) => category.attributes.title
               ),
            },
         }))
      } catch (error) {
         setError(true)
         console.log(error)
      }
      setLoading(false)
   }
   useEffect(() => {
      fetchAnime()
   }, [animeId])

   return { anime, loading, error }
}
