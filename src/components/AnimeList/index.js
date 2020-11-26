import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import animeActions from '../../actions'
import { useListFetch } from '../../hooks/useListFetch'
import { Content, ListItem, Button } from './styles'
import noImage from '../../assets/images/noImage.jpg'
import done from '../../assets/images/done.svg'
import cancel from '../../assets/images/cancel.svg'
import Spinner from '../Spinner'

function List({ type, idsList, remove, doneWatching }) {
   const { animes, loading } = useListFetch(`${type}List`, idsList?.join())

   return (
      <div style={{ width: '100%', flexShrink: '0' }}>
         <Content test-dataid="animeListContent">
            {!loading ? (
               animes.data[0] ? (
                  animes.data.map(({ attributes, id }, idx) => (
                     <ListItem key={idx}>
                        <Link to={`/anime/${id}`}>
                           <img
                              src={attributes.posterImage?.small || noImage}
                              alt="anime"
                              height="200px"
                           />
                        </Link>
                        <div style={{ width: '100%', color: 'white' }}>
                           <h3>{attributes.canonicalTitle}</h3>
                           <p>{attributes.synopsis}</p>
                        </div>
                        <div style={{display: 'flex', flexDirection: 'column'}}>
                           <Button
                              onClick={() => {
                                 remove(id)
                              }}
                           >
                              <img src={cancel} alt="remove" />
                           </Button>
                           {type === 'watching' ? (
                              <Button
                                 onClick={() => {
                                    doneWatching(id)
                                 }}
                              >
                                 <img src={done} alt="done" />
                              </Button>
                           ) : null}
                        </div>
                     </ListItem>
                  ))
               ) : (
                  <h2>No {type} anime found</h2>
               )
            ) : (
               <Spinner />
            )}
         </Content>
      </div>
   )
}

const mapStateToProps = ({ animes }, { type }) => {
   return {
      idsList: animes[`${type}List`],
   }
}

const mapDispatchToProps = (dispatch, { type }) => ({
   remove: (animeId) => dispatch(animeActions[type].remove(animeId)),
   doneWatching: (animeId) => dispatch(animeActions.watching.done(animeId)),
})

export default connect(mapStateToProps, mapDispatchToProps)(List)
