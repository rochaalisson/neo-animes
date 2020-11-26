import AnimeList from '../components/AnimeList'
import { fireEvent, render } from '@testing-library/react'
import { Provider } from 'react-redux'
import store from '../store'

describe('Test component AnimeCard', () => {
   const { getByTestId, getByText } = render(
      <Provider store={store}>
         <AnimeList type="favorite" />
      </Provider>
   )

   expect(getByTestId('animeListContent')).toEqual('Anime')
   fireEvent.click(getByTestId('testCardOptionsButton'))
})
