import { FAVORITE, WATCHED, WATCHING, ANIMES } from '../../helpers/Constants'
import { loadMyAnimes } from '../../helpers/localStorage'

const INITIAL_STATE = loadMyAnimes()

export default function reducer(state = INITIAL_STATE, action = null) {
   const toggleItemFromList = (list, toggledItem) =>
      list.includes(toggledItem)
         ? list.filter((listItem) => listItem !== toggledItem)
         : [...list, toggledItem]

   switch (action.type) {
      case FAVORITE.TOGGLE:
         return {
            ...state,
            favoriteList: toggleItemFromList(
               [...state.favoriteList],
               action.payload
            ),
         }
      case WATCHED.TOGGLE:
         return {
            ...state,
            watchedList: toggleItemFromList(
               [...state.watchedList],
               action.payload
            ),
         }
      case WATCHING.TOGGLE:
         return {
            ...state,
            watchingList: toggleItemFromList(
               [...state.watchingList],
               action.payload
            ),
         }
      case FAVORITE.REMOVE:
         return {
            ...state,
            favoriteList: state.favoriteList.filter(
               (animeId) => animeId !== action.payload
            ),
         }
      case WATCHED.REMOVE:
         return {
            ...state,
            watchedList: state.favoriteList.filter(
               (animeId) => animeId !== action.payload
            ),
         }
      case WATCHING.REMOVE:
         return {
            ...state,
            watchingList: state.favoriteList.filter(
               (animeId) => animeId !== action.payload
            ),
         }
      case FAVORITE.CLEAR:
         return {
            ...state,
            favoriteList: [],
         }
      case WATCHED.CLEAR:
         return {
            ...state,
            watchedList: [],
         }
      case WATCHING.CLEAR:
         return {
            ...state,
            watchingList: [],
         }
      case ANIMES.CLEAR_ALL:
         return {
            favoriteList: [],
            watchedList: [],
            watchingList: [],
         }
      case WATCHING.DONE:
         return {
            ...state,
            watchingList: state.watchingList.filter(
               (animeId) => animeId !== action.payload
            ),
            watchedList: state.watchedList.includes(action.payload)
               ? state.watchedList
               : [...state.watchedList, action.payload],
         }
      default:
         return state
   }
}
