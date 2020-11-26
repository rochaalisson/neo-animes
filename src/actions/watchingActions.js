import { WATCHING } from '../helpers/Constants'

export const toggle = (animeId) => (dispatch) => {
   return dispatch({
      type: WATCHING.TOGGLE,
      payload: animeId,
   })
}
export const remove = (animeId) => (dispatch) => {
   return dispatch({
      type: WATCHING.REMOVE,
      payload: animeId,
   })
}
export const done = (animeId) => (dispatch) => {
   return dispatch({
      type: WATCHING.DONE,
      payload: animeId,
   })
}
export const clear = () => (dispatch) => {
   return dispatch({
      type: WATCHING.CLEAR,
      payload: null,
   })
}
export default {
   toggle,
   remove,
   done,
   clear,
}
