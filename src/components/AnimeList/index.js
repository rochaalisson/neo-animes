import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import animeActions from '../../actions'
import { useListFetch } from '../../hooks/useListFetch'
import { Content, ListItem, Button, PagingButtons } from './styles'
import noImage from '../../assets/images/noImage.jpg'
import done from '../../assets/images/done.svg'
import cancel from '../../assets/images/cancel.svg'
import Spinner from '../Spinner'

function List({ type, idsList, remove, doneWatching }) {
   const { animes, loading, page, setPage } = useListFetch(
      `${type}List`,
      idsList?.join()
   )

   return (
      <div style={{ width: '100%', flexShrink: '0' }}>
         <Content>
            {!loading ? (
               animes.data[0] ? (
                  <>
                     {animes.data.map(({ attributes, id }, idx) => {
                        const posterImage =
                           attributes.posterImage?.small || noImage
                        const title = attributes.canonicalTitle || ''
                        const description = attributes.description || ''
                        return (
                           <ListItem key={idx}>
                              <Link to={`/anime/${id}`}>
                                 <img
                                    src={posterImage}
                                    alt="anime"
                                    height="200px"
                                 />
                              </Link>
                              <div style={{ width: '100%', color: 'white' }}>
                                 <h3>{title}</h3>
                                 <p>{description}</p>
                              </div>
                              <div
                                 style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    height: '100%',
                                 }}
                              >
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
                        )
                     })}
                     <PagingButtons>
                        {page != 0 ? (
                           <button
                              onClick={() => {
                                 setPage(page - 1)
                              }}
                           >
                              PREVIOUS
                           </button>
                        ) : (
                           <div></div>
                        )}
                        <p>Page {page}</p>
                        {page < animes.meta?.count / 20 - 1 ? (
                           <button
                              onClick={() => {
                                 setPage(page + 1)
                              }}
                           >
                              NEXT
                           </button>
                        ) : (
                           <div></div>
                        )}
                     </PagingButtons>
                  </>
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
