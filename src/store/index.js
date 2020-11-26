import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import { saveMyAnimes } from '../helpers/localStorage'

import animes from './animesReducer'

const rootReducer = combineReducers({ animes })

const store = createStore(
   rootReducer,
   composeWithDevTools(applyMiddleware(thunk))
)

store.subscribe(() => {
   saveMyAnimes(store.getState().animes)
})

export default store
