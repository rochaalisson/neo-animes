import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { Content, AnimeTitle, Options, Image, Collapsible } from './styles'
import noImage from '../../assets/images/noImage.jpg'
import optionsButton from '../../assets/images/arrow-down.svg'
import animeActions from '../../actions'

function AnimeCard({ anime, animeStatus, toggle }) {
   const attributes = anime?.attributes || {
      canonicalTitle: '',
      posterImage: { small: '' },
   }
   const title = attributes.canonicalTitle || ''
   const image = attributes.posterImage?.small || noImage

   const [isCollapsed, setIsCollapsed] = useState(false)

   const Icon = ({ listType }) => {
      const handleIconClick = () => {
         toggle(listType)
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
            height="24"
            viewBox="0 0 24 24"
            width="24"
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
                  className={animeStatus[listType] ? 'checked' : null}
               />
               {paths[listType] || null}
            </g>
         </svg>
      )
   }

   const handleOptionsClick = () => {
      setIsCollapsed(!isCollapsed)
   }

   const handleMouseLeave = () => {
      setIsCollapsed(false)
   }
   return (
      <>
         {anime ? (
            <Content onMouseLeave={handleMouseLeave}>
               <Link to={`/anime/${anime.id}`} style={{ padding: '0' }}>
                  <Image>
                     <img src={image} alt={title} width="100%" />
                  </Image>
                  <AnimeTitle>{title}</AnimeTitle>
               </Link>
               <Options onClick={handleOptionsClick}>
                  <img src={optionsButton} alt="options" width="100%" />
               </Options>
               <Collapsible style={{ display: isCollapsed ? 'block' : 'none' }}>
                  <Icon listType="favorite" />
                  <Icon listType="watching" />
                  <Icon listType="watched" />
               </Collapsible>
            </Content>
         ) : null}
      </>
   )
}

const mapStateToProps = ({ animes }, { anime }) => ({
   animeStatus: {
      favorite: animes.favoriteList?.includes(anime?.id),
      watched: animes.watchedList?.includes(anime?.id),
      watching: animes.watchingList?.includes(anime?.id),
   },
})

const mapDispatchToProps = (dispatch, { anime }) => ({
   toggle: (listType) => {
      return dispatch(animeActions[listType].toggle(anime.id))
   },
})

export default connect(mapStateToProps, mapDispatchToProps)(AnimeCard)
