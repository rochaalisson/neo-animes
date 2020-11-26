// Configuração para a api do Kitsu
// Docs: https://kitsu.docs.apiary.io/

const API_URL = 'https://kitsu.io/api/edge/'
const CLIENT_ID = process.env.REACT_APP_CLIENT_ID

const SEARCH_BASE_URL = `${API_URL}anime?filter[text]=`
const POPULAR_BASE_URL = `${API_URL}anime?sort=`
const PAGING = `page[limit]=20&page[offset]=`

export { SEARCH_BASE_URL, POPULAR_BASE_URL, API_URL, CLIENT_ID, PAGING }
