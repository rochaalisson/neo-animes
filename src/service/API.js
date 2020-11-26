import {
   SEARCH_BASE_URL,
   POPULAR_BASE_URL,
   API_URL,
   PAGING,
} from '../helpers/config'

const config = {
   headers: {
      'Content-Type': 'application/vnd.api+json',
      Accept: 'application/vnd.api+json',
   },
}

const apiSettings = {
   fetchAnimes: async (searchTerm = '', page = 0) => {
      const pageOffset = page * 20
      const endpoint =
         searchTerm.charAt(0) === '@' || !searchTerm
            ? `${POPULAR_BASE_URL}${searchTerm.substr(
                 1
              )}&${PAGING}${pageOffset}`
            : `${SEARCH_BASE_URL}${searchTerm}&${PAGING}${pageOffset}`
      return await (await fetch(endpoint, config)).json()
   },
   fetchAnime: async (animeId) => {
      const endpoint = `${API_URL}anime/${animeId}`
      return await (await fetch(endpoint, config)).json()
   },
   fetchList: async (animeIds) => {
      const endpoint = `${API_URL}anime?filter[id]=${animeIds}&${PAGING}`
      return await (await fetch(endpoint, config)).json()
   },
   fetchCategories: async (animeId) => {
      const endpoint = `${API_URL}/anime/${animeId}/categories?${PAGING}`
      return await (await fetch(endpoint, config)).json()
   },
   fetchTrending: async () => {
      const endpoint = `${API_URL}trending/anime`
      return await (await fetch(endpoint, config)).json()
   },
}

export default apiSettings
