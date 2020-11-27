import React, { useState } from 'react'
import { useTrendingFetch } from '../../hooks/useTrendingFetch'
import { Slide, Container, Info, Image, Slides, SlideButton } from './styles'
import { Link } from 'react-router-dom'
import Spinner from '../Spinner'
import navigationButton from '../../assets/images/arrow-down.svg'
import noImage from '../../assets/images/noImage.jpg'

export default function AnimeSlider() {
   const { animes, loading } = useTrendingFetch()
   const [slide, setSlide] = useState(0)
   const handleSlideChange = (increment) => {
      const nextSlide = Math.max(
         0,
         Math.min(slide + increment, animes.data.length - 1)
      )
      setSlide(nextSlide)
   }

   return (
      <>
         <div
            style={{
               overflow: 'hidden',
               position: 'relative',
            }}
         >
            <Slides offset={slide}>
               {!loading ? (
                  animes?.data?.map(({ attributes, id }, idx) => {
                     const posterImage =
                        attributes.posterImage?.large || noImage
                     const coverImage = attributes.coverImage?.small || noImage
                     const rating = attributes.averageRating || '0'
                     const title = attributes.canonicalTitle || ''
                     return attributes ? (
                        <Link
                           to={`/anime/${id}`}
                           key={idx}
                           style={{
                              minWidth: '100%',
                              textDecoration: 'none',
                           }}
                        >
                           <Slide image={coverImage}>
                              <Container>
                                 <Image className="image-div">
                                    <img
                                       src={posterImage}
                                       alt="Anime"
                                       height="100%"
                                    />
                                 </Image>
                                 <Info>
                                    <h2>{title}</h2>
                                    <h4>Rating:</h4>
                                    <p>{rating}%</p>
                                 </Info>
                              </Container>
                           </Slide>
                        </Link>
                     ) : null
                  })
               ) : (
                  <Spinner />
               )}
            </Slides>
            {slide != 0 ? (
               <SlideButton
                  className="left-button"
                  onClick={() => {
                     handleSlideChange(-1)
                  }}
               >
                  <img src={navigationButton} alt="previous" />
               </SlideButton>
            ) : null}
            {slide != animes.data.length - 1 ? (
               <SlideButton
                  onClick={() => {
                     handleSlideChange(1)
                  }}
               >
                  <img src={navigationButton} alt="next" />
               </SlideButton>
            ) : null}
         </div>
      </>
   )
}
