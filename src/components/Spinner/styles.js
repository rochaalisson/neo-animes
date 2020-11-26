import styled from 'styled-components'

export const Spinner = styled.div`
   border: 5px solid var(--darkGrey);
   border-top: 5px solid var(--lightGrey);
   border-radius: 50%;
   width: 50px;
   height: 50px;
   animation: spin 0.5s linear infinite;
   margin: 20px auto;

   @keyframes spin {
      0% {
         transform: rotateX(0deg);
      }
      100% {
         transform: rotate(360deg);
      }
   }
`
