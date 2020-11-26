import { useState, useEffect } from 'react'
import { INITIAL_FETCH_STATE as initialState } from '../helpers/Constants'

import API from '../service/API'

export const useTrendingFetch = () => {
   const [error, setError] = useState('')
   const [loading, setLoading] = useState(true)
   const [animes, setAnimes] = useState(initialState)

   const fetchAnimes = async () => {
      try {
         setError(false)
         setLoading(true)

         const animesAPI = await API.fetchTrending()
         // const getCategories = async (animeId) => {
         //    setLoading(true)
         //    const categories = (await API.fetchCategories(animeId)).data?.map(
         //       (category) => category.attributes.title
         //    )
         //    return await categories
         // }

         setAnimes(() => ({
            ...animesAPI,
            data: animesAPI.data.map((anime) => {
               return {
                  ...anime,
                  attributes: {
                     ...anime.attributes,
                     // categories: getCategories(anime.id),
                  },
               }
            }),
         }))
      } catch (error) {
         setError(true)
         console.log(error)
      }
      setLoading(false)
   }
   useEffect(() => {
      fetchAnimes()
   }, [])

   return { animes, loading, error }
}
