import styled from 'styled-components'

export const SearchButton = styled.button`
   cursor: pointer;
   float: right;
   background: var(--lightGrey);
   border: 1px solid var(--medGrey);
   border-left: none;
   display: flex;
   align-items: center;
   height: 100%;
   border-radius: 0 100px 100px 0;
   :hover {
      background: #ddd;
   }
`

export const Input = styled.input`
   border: 1px solid var(--medGrey);
   padding: 0 10px;
   border-radius: 100px 0 0 100px;
   flex: 1;
   max-width: 100%;
`

export const Form = styled.form`
   height: 2.5rem;
   justify-content: space-around;
   width: 350px;
   max-width: 100%;
   display: flex;
   a {
      margin: 0;
   }
`
