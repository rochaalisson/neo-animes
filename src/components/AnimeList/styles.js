import styled from 'styled-components'

export const Content = styled.div`
   display: flex;
   flex-shrink: 0;
   white-space: normal;
   width: 100%;
   flex-direction: column;
`
export const ListItem = styled.div`
   display: flex;
   align-items: flex-start;
   background-color: var(--medGrey);
   color: white;
`
export const Button = styled.button`
   height: 50px;
   cursor: pointer;
`
export const PagingButtons = styled.div`
   width: 50%;
   margin: 5px auto;
   display: flex;
   justify-content: space-evenly;
   button {
      cursor: pointer;
      color: var(--lightGrey);
      font-size: 1rem;
      border: none;
      background: var(--medGrey);
      padding: 5px;
      border-radius: 5px;
   }
   p {
      font-size: 1.2rem;
      margin: 0;
   }
`
