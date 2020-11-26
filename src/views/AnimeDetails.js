import React from 'react'
import { useParams } from 'react-router'
import Spinner from '../components/Spinner'
import { useSingleFetch } from '../hooks/useSingleFetch'
import styled from 'styled-components'
import noImage from '../assets/images/noImage.jpg'
import { connect } from 'react-redux'
import animeActions from '../actions'

const AnimeHeader = styled.div`
   width: 100%;
   height: 250px;
   background: url(${({ image }) => image}) bottom/cover;
`

function AnimeDetails({ getAnimeStatus, toggle }) {
   const { id } = useParams()
   const { anime, loading } = useSingleFetch(id)
   const rating = anime.attributes.averageRating || 0
   const posterImage = anime.attributes.posterImage.small || noImage
   const coverImage = anime.attributes.coverImage.large || noImage
   const ratingCount = (() => {
      let sum = 0
      const ratingFrequencies = anime.attributes.ratingFrequencies
      for (const rate in ratingFrequencies)
         sum += parseInt(ratingFrequencies[rate]) || 0

      return sum != 0 ? sum : 'No ratings yet'
   })()
   const Icon = ({ listType }) => {
      const handleIconClick = () => {
         toggle(id, listType)
      }

      const paths = {
         favorite: (
            <path d="M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z" />
         ),
         watched: (
            <path d="M19.77 4.93l1.4 1.4L8.43 19.07l-5.6-5.6 1.4-1.4 4.2 4.2L19.77 4.93m0-2.83L8.43 13.44l-4.2-4.2L0 13.47l8.43 8.43L24 6.33 19.77 2.1z" />
         ),
         watching: (
            <path d="M11 7h6v2h-6zm0 4h6v2h-6zm0 4h6v2h-6zM7 7h2v2H7zm0 4h2v2H7zm0 4h2v2H7zM20.1 3H3.9c-.5 0-.9.4-.9.9v16.2c0 .4.4.9.9.9h16.2c.4 0 .9-.5.9-.9V3.9c0-.5-.5-.9-.9-.9zM19 19H5V5h14v14z" />
         ),
      }
      return (
         <svg
            xmlns="http://www.w3.org/2000/svg"
            height="50"
            viewBox="0 0 24 24"
            width="50"
         >
            <g onClick={handleIconClick}>
               <rect
                  x="0"
                  y="0"
                  rx="3"
                  ry="3"
                  width="24"
                  height="24"
                  fill="transparent"
                  className={getAnimeStatus(id)[listType] ? 'checked' : null}
               />
               {paths[listType] || null}
            </g>
         </svg>
      )
   }

   return (
      <>
         <AnimeHeader image={coverImage} />
         {!loading ? (
            anime ? (
               <Wrapper>
                  <img src={posterImage} alt="" height="100%" width="auto" />
                  <div style={{ margin: '0 10px' }}>
                     <div style={{ display: 'flex', alignItems: 'center' }}>
                        <h2 style={{ margin: '0', fontSize: '2rem' }}>
                           {anime.attributes.canonicalTitle}
                        </h2>
                        <IconButtons className="icon-buttons">
                           <Icon listType="favorite" />
                           <Icon listType="watching" />
                           <Icon listType="watched" />
                        </IconButtons>
                     </div>
                     <Attribute>
                        <AttributeTitle>Rating:</AttributeTitle>
                        <p>{rating}%</p>
                        <RatingBar rating={rating}>
                           <div className="progress"></div>
                        </RatingBar>
                        <p style={{ margin: '0' }}>({ratingCount})</p>
                     </Attribute>
                     <AttributeTitle>Categories: </AttributeTitle>
                     <Categories>
                        {anime.attributes.categories?.map((category, idx) => (
                           <CategoryItem key={`category${idx}`}>
                              {category}
                           </CategoryItem>
                        ))}
                     </Categories>
                     <Attribute>
                        <AttributeTitle>Episodes: </AttributeTitle>
                        <p>{anime.attributes.episodeCount}</p>
                     </Attribute>
                     <AttributeTitle>Description:</AttributeTitle>
                     <div
                        style={{
                           whiteSpace: 'pre-line',
                           textAlign: 'justify',
                        }}
                     >
                        {anime.attributes.synopsis}
                     </div>
                  </div>
               </Wrapper>
            ) : (
               <h2>Sorry, no anime found</h2>
            )
         ) : (
            <Spinner />
         )}
      </>
   )
}

const mapStateToProps = ({ animes }) => ({
   getAnimeStatus: (id) => ({
      favorite: animes.favoriteList?.includes(id),
      watched: animes.watchedList?.includes(id),
      watching: animes.watchingList?.includes(id),
   }),
})

const mapDispatchToProps = (dispatch) => ({
   toggle: (id, listType) => dispatch(animeActions[listType].toggle(id)),
})

export default connect(mapStateToProps, mapDispatchToProps)(AnimeDetails)

const Wrapper = styled.div`
   color: white;
   padding: 10px;
   img {
      float: left;
      margin-right: 10px;
   }
   @media (max-width: 570px) {
      align-items: center;
      img {
         display: none;
      }
   }
`
const Attribute = styled.div`
   display: flex;
   align-items: center;
`
const RatingBar = styled.div`
   background: white;
   width: 100px;
   height: 1rem;
   margin: 0 5px;
   border-radius: 100px;
   overflow: hidden;
   .progress {
      background: hsl(${({ rating }) => rating * 1.2}, 100%, 45%);
      height: 100%;
      width: ${({ rating }) => `${rating}%`};
   }
`
const AttributeTitle = styled.h4`
   margin: 0;
   margin-right: 0.5rem;
`
const Categories = styled.ul`
   display: flex;
   list-style: none;
   flex-wrap: wrap;
   padding: 0;
   margin: 5px 0;
   color: black;
`
const CategoryItem = styled.li`
   background: var(--lightGrey);
   border-radius: 5px;
   padding: 3px;
   margin: 2px;
`
const IconButtons = styled.div`
   white-space: nowrap;
   margin-left: 10px;
   svg {
      height: 100%;
      cursor: pointer;
      fill: white;
      .checked {
         fill: black;
      }
      :hover {
         fill: var(--primaryColor);
      }
   }
`
