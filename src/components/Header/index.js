import React from 'react'
import { Link } from 'react-router-dom'
import SearchBar from '../SearchBar'
import { Wrapper, Content, Logos } from './styles'

export default function Header() {
   return (
      <>
         <Wrapper>
            <Content>
               <Link to="/" style={{ margin: '0' }}>
                  <Logos>
                     <h1 className="normal-logo">
                        Neo<span>Animes</span>
                     </h1>
                     <h1 className="small-logo">
                        N<span>A</span>
                     </h1>
                  </Logos>
               </Link>
               <div
                  style={{
                     display: 'flex',
                     alignItems: 'center',
                     justifyContent: 'space-between',
                  }}
               >
                  <Link to="/myanimes" className="my-list-link">
                     <h2>My List</h2>
                  </Link>
                  <SearchBar />
               </div>
            </Content>
         </Wrapper>
      </>
   )
}
