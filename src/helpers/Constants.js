import noImage from '../assets/images/noImage.jpg'

export const WATCHED = {
   TOGGLE: 'TOGGLE_WATCHED',
   REMOVE: 'REMOVE_WATCHED',
   CLEAR: 'CLEAR_WATCHED',
}
export const WATCHING = {
   TOGGLE: 'TOGGLE_WATCHING',
   REMOVE: 'REMOVE_WATCHING',
   DONE: 'DONE_WATCHING',
   CLEAR: 'CLEAR_WATCHING',
}
export const FAVORITE = {
   TOGGLE: 'TOGGLE_FAVORITE',
   REMOVE: 'REMOVE_FAVORITE',
   CLEAR: 'CLEAR_FAVORITE',
}
export const ANIMES = {
   CLEAR_ALL: 'CLEAR_ALL_ANIMES',
}

export const INITIAL_FETCH_STATE = {
   data: [
      {
         attributes: {
            posterImage: {
               small: noImage,
               large: noImage,
            },
            coverImage: {
               small: noImage,
               large: noImage,
            },
            canonicalTitle: '',
         },
      },
   ],
}
