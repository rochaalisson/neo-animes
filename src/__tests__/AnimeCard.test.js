import AnimeCard from '../components/AnimeCard'
import { fireEvent, render } from '@testing-library/react'
import { Provider } from 'react-redux'
import store from '../store'

describe('Test component AnimeCard', () => {
   const { getByTestId, getByText } = render(
      <Provider store={store}>
         <AnimeCard />
      </Provider>
   )
})
