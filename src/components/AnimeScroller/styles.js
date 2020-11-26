import styled from 'styled-components'

export const Title = styled.div`
   margin: 0;
   display: flex;
   flex-direction: row;
   align-items: flex-end;
   justify-content: space-between;
   padding: 0 10px;
   a {
      text-decoration: none;
      color: var(--primaryColor);
   }
   h2 {
      margin: 0;
   }
`
export const Container = styled.div`
   display: flex;
   white-space: nowrap;
   justify-content: flex-start;
   overflow-x: visible;
   transform: translateX(
      ${({ off }) => {
         return `-${100 * off}%`
      }}
   );
   transition: transform 0.5s;
   width: auto;
`

export const Wrapper = styled.div`
   overflow: hidden;
   position: relative;
`
export const NavigationButtons = styled.div`
   background: none;
   display: flex;
   justify-content: space-between;
   position: absolute;
   top: 0;
   width: auto;
   height: 100%;
   button {
      cursor: pointer;
      border: none;
      padding: 0 10px;
      background: linear-gradient(to right, transparent, black);
      :hover {
         img {
            width: 4.2rem;
         }
      }
   }
   img {
      margin: -17px;
      width: 3.5rem;
      transform: rotate(-90deg);
   }
   .left-button {
      background: linear-gradient(to left, transparent, black);
      img {
         transform: rotate(90deg);
      }
   }
`

export const NavButton = styled.button`
   cursor: pointer;
   position: absolute;
   height: 100%;
   width: auto;
   right: 0;
   top: 0;
   border: none;
   background: linear-gradient(to right, transparent, black);
   img {
      margin: -17px;
      width: 3.5rem;
      transform: rotate(-90deg);
   }
   &.left-button {
      left: 0;
      background: linear-gradient(to left, transparent, black);
      img {
         transform: rotate(90deg);
      }
   }
   :hover {
      img {
         width: 4.2rem;
      }
   }
`
