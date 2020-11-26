const INITIAL_STATE = {
   favoriteList: [],
   watchedList: [],
   watchingList: [],
}

export const loadMyAnimes = () => {
   try {
      const serializedState = localStorage.getItem('myAnimes')
      if (serializedState === null) {
         return INITIAL_STATE
      }
      return JSON.parse(serializedState)
   } catch (err) {
      return INITIAL_STATE
   }
}
export const saveMyAnimes = async (animes) => {
   const serializedState = await JSON.stringify(animes)
   localStorage.setItem('myAnimes', serializedState)
}
