import styled from 'styled-components'

export const Slide = styled.div`
   background: ${({ image }) => {
      return `url(${image})`
   }};
   flex-shrink: 0;
   background-repeat: no-repeat;
   min-width: 100%;
   padding: 40px;
   background-size: cover;
   background-position: center;
`

export const Container = styled.div`
   border-radius: 60px;
   height: 350px;
   padding: 20px;
   transition: height 0.5s;
   @media (max-width: 860px) {
      height: 250px;
   }
   @media (max-width: 550px) {
      font-size: 0.8em;
      flex-direction: column;
      width: 100%;
      height: auto;
      padding: 20px 20px 12px 20px;
      border-radius: 50px 50px 15px 15px;
      div {
         padding: 0;
         border: none;
      }
      img {
         margin-bottom: 5px;
         width: 100%;
      }
      div img {
         border-radius: 50px 50px 8px 8px;
      }
      div h4,
      div p {
         display: none;
      }
   }
   display: flex;
   justify-content: center;
   background: rgba(0, 0, 0, 0.8);
`

export const Info = styled.div`
   width: 100%;
   padding-left: 15px;
   border-left: 1px solid white;
   white-space: nowrap;
   overflow: hidden;
   p {
      display: inline-block;
      font-size: 1.5em;
   }
   h4 {
      display: inline-block;
      font-size: 1.5em;
      padding-right: 0.5rem;
      color: var(--lightGrey);
   }
   h2 {
      white-space: normal;
      @media (max-width: 550px) {
         white-space: nowrap;
         overflow: hidden;
         text-overflow: ellipsis;
         font-size: 2.5em;
      }
      margin: 0;
      font-size: 3em;
   }
`

export const Image = styled.div`
   height: 100%;
   img {
      border-radius: 50px;
      box-shadow: 1px 1px 5px #333;
      border: 5px solid white;
      margin-right: 15px;
   }
`
export const Slides = styled.div`
   white-space: nowrap;
   overflow-x: visible;
   display: flex;
   transition: transform 0.5s;
   transform: translateX(${({ offset }) => `-${100 * offset}%`});
`

export const SlideButton = styled.button`
   background: none;
   position: absolute;
   top: 0;
   right: 0;
   width: auto;
   height: 100%;
   cursor: pointer;
   border: none;
   padding: 0 10px;
   background: linear-gradient(to right, transparent, black);
   :hover {
      img {
         width: 4.2rem;
      }
   }
   img {
      margin: -17px;
      width: 3.5rem;
      transform: rotate(-90deg);
   }
   &.left-button {
      background: linear-gradient(to left, transparent, black);
      left: 0;
      img {
         transform: rotate(90deg);
      }
   }
`

// export const Categories = styled.ul`
//    display: flex;
//    list-style: none;
//    flex-wrap: wrap;
//    padding: 0;
//    margin: 5px 0;
//    color: black;
// `
// export const CategoryItem = styled.li`
//    background: var(--lightGrey);
//    border-radius: 5px;
//    padding: 3px;
//    margin: 2px;
// `
