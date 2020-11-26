import { FAVORITE } from '../helpers/Constants'

export const toggle = (animeId) => (dispatch) => {
   return dispatch({
      type: FAVORITE.TOGGLE,
      payload: animeId,
   })
}
export const remove = (animeId) => (dispatch) => {
   return dispatch({
      type: FAVORITE.REMOVE,
      payload: animeId,
   })
}
export const clear = () => (dispatch) => {
   return dispatch({
      type: FAVORITE.CLEAR,
      payload: null,
   })
}
export default {
   toggle,
   remove,
   clear,
}
