import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    :root {
        --maxWidth: 1280px;
        --white: #fff;
        --lightGrey: #eee;
        --medGrey: #353535;
        --darkGrey: #1c1c1c;
        --primaryColor: #8257e6;
    }
    #root{
        min-height: 100vh;
        position: relative;
        padding-bottom: 90px;
    }

    * {
        box-sizing: border-box;
        font-family: 'Roboto', sans-serif;
    }

    body {
        margin: 0 auto;
        padding: 0;
        box-sizing: border-box;
        background-color: var(--darkGrey);
        h1 {
            font-size: 2.3rem;
            font-weight: 900;
        }
        
        h2 {
            color: var(--lightGrey);
            font-weight: 700;
        }
        h3 {
            font-size: 1.1rem;
            font-weight: 500;
        }

        p {
            color: var(--white);
            font-size: 1rem;
        }
    }
`
