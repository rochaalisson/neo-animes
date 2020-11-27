import styled from 'styled-components'

export const Wrapper = styled.div`
   background-color: #151515;
   padding: 0 10px;
`

export const Content = styled.div`
   max-width: var(--maxWidth);
   min-width: 70vw;
   display: flex;
   align-items: center;
   justify-content: space-between;
   padding: 0;
   margin: 0 auto;
   span {
      color: var(--white);
   }
   h2 {
      margin-right: 20px;
   }
   @media (max-width: 720px) {
      h1.small-logo {
         display: block;
      }
      .normal-logo {
         display: none;
      }
   }
   @media (max-width: 575px) {
      padding-bottom: 10px;
      flex-direction: column;
      text-align: center;
      > * {
         flex-direction: column;
         width: 100%;
         > * {
            width: 100%;
         }
      }
      h1,
      .my-list-link,
      h2 {
         margin: 5px 0;
      }
      h1.small-logo {
         display: none;
      }
      .normal-logo {
         display: block;
      }
   }
`

export const Logos = styled.div`
   .small-logo {
      display: none;
   }
`
