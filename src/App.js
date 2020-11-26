import React from 'react'
import Home from './views/Home'
import Lists from './views/AnimeLists'
import AnimeSearch from './views/AnimeSearch'
import AnimeDetails from './views/AnimeDetails'
import Header from './components/Header'
import { GlobalStyle } from './GlobalStyle'
import { Route, Routes } from 'react-router-dom'

function App() {
   return (
      <>
         <GlobalStyle />
         <Header />
         <main
            style={{
               maxWidth: 'var(--maxWidth)',
               minWidth: '70vw',
               margin: '0 auto',
            }}
         >
            <Routes>
               <Route path="/">
                  <Home />
               </Route>
               <Route path="/search">
                  <AnimeSearch />
               </Route>
               <Route path="/anime/:id">
                  <AnimeDetails />
               </Route>
               <Route path="/myanimes">
                  <Lists />
               </Route>
            </Routes>
         </main>
      </>
   )
}

export default App
