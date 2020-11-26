import styled from 'styled-components'

export const Content = styled.div`
   &,
   * {
      cursor: pointer;
   }
   flex-shrink: 0;
   flex-grow: 0;
   align-self: start;
   margin: 10px;
   border-radius: 1.4rem 1.4rem 0 0;
   position: relative;
   width: 180px;
   overflow: hidden;
   transition: width 0.2s;
   :hover {
      div > img {
         opacity: 0.7;
      }
      button {
         display: block;
      }
   }
   @media (max-width: 500px) {
      width: 130px;
   }
   @media (min-width: 1920px) {
      width: 250px;
      font-size: 1.5rem;
   }
   @media (pointer: none), (pointer: coarse) {
      button {
         display: block;
      }
   }
`
export const AnimeTitle = styled.h3`
   position: absolute;
   padding: 1rem 0.2rem 0.35rem 0.2rem;
   background-image: linear-gradient(transparent, #111);
   text-align: center;
   margin: 0;
   width: 100%;
   white-space: normal;
   height: auto;
   bottom: 4px;
   font-size: 0.9em;
   color: var(--white);
`
export const Options = styled.button`
   display: none;
   position: absolute;
   width: 2.5rem;
   height: 2.5rem;
   padding: 0;
   right: 0;
   top: 0;
   border: none;
   background: none;
   :hover {
      background-image: radial-gradient(
         rgba(200, 200, 200, 0.8),
         transparent,
         transparent
      );
   }
`
export const Image = styled.div`
   height: auto;
`
export const Collapsible = styled.div`
   position: absolute;
   background: var(--lightGrey);
   border-radius: 2px;
   right: 0;
   top: 2.5rem;
   svg {
      stroke-width: 0;
      height: 2.5rem;
      width: 2.5rem;
      display: block;
      padding: 2px 0;
      .checked {
         fill: #fd7;
      }
      :hover {
         fill: var(--primaryColor);
      }
   }
`
