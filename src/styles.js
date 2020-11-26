import styled from 'styled-components'

export const Content = styled.div`
   --itemWidth: 180px;
   display: grid;
   grid-template-columns: repeat(auto-fill, minmax(var(--itemWidth), 1fr));
   grid-gap: 5px;
   max-width: var(--maxWidth);
   margin: 0 auto;
   @media (max-width: 370px) {
      --itemWidth: 130px;
   }
   @media (min-width: 1920px) {
      --itemWidth: 250px;
   }
`
