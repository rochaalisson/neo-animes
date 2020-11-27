import React, { useState } from 'react'
import { useTrendingFetch } from '../../hooks/useTrendingFetch'
import {
   Slide,
   Container,
   Info,
   Image,
   Slides,
   SlideButton,
} from './styles'
import { Link } from 'react-router-dom'
import Spinner from '../Spinner'
import navigationButton from '../../assets/images/arrow-down.svg'

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
                     return attributes ? (
                        <Link
                           to={`/anime/${id}`}
                           key={idx}
                           style={{
                              minWidth: '100%',
                              textDecoration: 'none',
                           }}
                        >
                           <Slide image={attributes?.coverImage?.small}>
                              <Container>
                                 <Image className="image-div">
                                    <img
                                       src={attributes?.posterImage.large}
                                       alt="Anime"
                                       height="100%"
                                    />
                                 </Image>
                                 <Info>
                                    <h2>{attributes?.canonicalTitle}</h2>
                                    <h4>Rating:</h4>
                                    <p>{attributes?.averageRating}%</p>
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
            <SlideButton
               className="left-button"
               onClick={() => {
                  handleSlideChange(-1)
               }}
            >
               <img src={navigationButton} alt="previous" />
            </SlideButton>
            <SlideButton
               onClick={() => {
                  handleSlideChange(1)
               }}
            >
               <img src={navigationButton} alt="next" />
            </SlideButton>
         </div>
      </>
   )
}
