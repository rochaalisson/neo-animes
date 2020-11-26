import { WATCHED } from '../helpers/Constants'

export const toggle = (animeId) => (dispatch) => {
   return dispatch({
      type: WATCHED.TOGGLE,
      payload: animeId,
   })
}
export const remove = (animeId) => (dispatch) => {
   return dispatch({
      type: WATCHED.REMOVE,
      payload: animeId,
   })
}
export const clear = () => (dispatch) => {
   return dispatch({
      type: WATCHED.CLEAR,
      payload: null,
   })
}

export default {
   toggle,
   remove,
   clear,
}
