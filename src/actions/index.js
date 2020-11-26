import AnimeScroller from '../components/AnimeScroller'
import favorite from './favoritesActions'
import watched from './watchedActions'
import watching from './watchingActions'
import { ANIMES } from '../helpers/Constants'

const clearAll = () => (dispatch) => {
   return dispatch({
      type: ANIMES.CLEAR_ALL,
      payload: null,
   })
}

export default {
   favorite,
   watched,
   watching,
   clearAll,
}
