import {createGlobalStyle} from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
        --background: #f0f2f5;
        --red: #E52E4D;
        --green: #50AE35;
        --blue: #5429cc;

        --blue-light: #6933ff;

        --text-title: #363f5f;
        --text-body: #969cb3;

        --shape: #FFFFFF;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        @media (max-width: 1000px) {
            font-size: 93.75%;
        }

        @media (max-width: 720px) {
            font-size: 87.5%;
        }
    }

    body {
        background: var(--background);
        -webkit-font-smoothing: antialiased;
    }

    border-style, input, textarea, button, p {
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
    }

    h1, h2, h3, h4, h5, h6, strong {
        font-weight: 600;
        font-family: 'Poppins', sans-serif;

    }

    button {
        cursor: pointer;
    }

    [disabled] {
        opacity: 0.6;
        cursor: not-allowed;
    }
`